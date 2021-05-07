const path = require('path')
const util = require('util')
const exec = util.promisify(require('child_process').exec)
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

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
        ],
      }),
      {
        apply: (compiler) => {
          compiler.hooks.watchRun.tapPromise('génération du fichier recettes/index.js', async () => {
            const { stderr } = await exec('node ./src/recettes/indexGénérateur.js')
            if (stderr) {
              console.log(stderr)
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
