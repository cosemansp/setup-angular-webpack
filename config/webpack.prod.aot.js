var webpack = require('webpack')
var webpackMerge = require('webpack-merge')
var prodConfig = require('./webpack.prod.js')

module.exports = webpackMerge.smart(prodConfig, {

  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.aot.ts'
  },

});

console.log('Build Type:   AOT')
