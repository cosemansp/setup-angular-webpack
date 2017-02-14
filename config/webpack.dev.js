var webpackMerge = require('webpack-merge')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var commonConfig = require('./webpack.common.js')
var helpers = require('./helpers')

module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',

  entry: ['./src/polyfills.ts', './src/main.ts'],

  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?sourceMap',
      },
    ]
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});
