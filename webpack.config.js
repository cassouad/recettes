const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
            loader: "babel-loader",
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
      })
    ],
    output: {
      path: path.resolve(__dirname, outputDirectoryName),
      filename: '[name].[contenthash].bundle.js',
      clean: true,
    },
  }
}
