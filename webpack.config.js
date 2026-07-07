const path = require('path')
const util = require('util')
const exec = util.promisify(require('child_process').exec)
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

// Quand webpack est lancé via « yarn webpack », Yarn injecte
// NODE_OPTIONS=--require .pnp.js dans l'environnement. Si un sous-processus
// « yarn node » hérite de cette variable, PnP est initialisé deux fois, ce qui
// déclenche un bug du runtime PnP (TypeError BigInt dans fs.gotStat).
// On lance donc les sous-processus avec un NODE_OPTIONS vidé : yarn node
// réinjecte PnP proprement, une seule fois.
const envSansPnp = { ...process.env, NODE_OPTIONS: '' }
const execOptions = { env: envSansPnp }

module.exports = (env, options) => {
  let outputDirectoryName
  if (options.mode === 'development') {
    outputDirectoryName = 'dist'
  } else {
    outputDirectoryName = 'docs'
  }

  return {
    entry: {
      index: './src/index.js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        inject: true,
      }),
      new CopyPlugin({
        patterns: [
          { from: 'src/fonts', to: 'fonts' },
          { from: 'src/images', to: 'images' },
        ],
      }),
      {
        apply: (compiler) => {
          compiler.hooks.beforeCompile.tapPromise('génération du fichier recettes/index.js', async () => {
            const { stderr } = await exec('yarn node ./src/recettes/indexGénérateur.js', execOptions)
            if (stderr) {
              console.log(stderr)
            }
          })
        }
      },
      {
        apply: (compiler) => {
          compiler.hooks.beforeCompile.tapPromise('validation des jsons des recettes', async () => {
            const { stderr } = await exec('yarn node ./src/recettes/valideTousLesJsons.js', execOptions)
            if (stderr) {
              throw new Error(stderr)
            }
          })
        }
      }
    ],
    output: {
      path: path.resolve(__dirname, outputDirectoryName),
      filename: '[name].[contenthash].bundle.js',
      clean: true,
    },
  }
}
