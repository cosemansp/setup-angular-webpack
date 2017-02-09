var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  module: {
    rules: [
      // handle all css files outside the app folder as embedded styles
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        loader: 'style-loader!css-loader?sourceMap',
      },
    ]
  },

  plugins: [
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});
