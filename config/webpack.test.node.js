var nodeExternals = require('webpack-node-externals')
var helpers = require('./helpers')
var webpackMerge = require('webpack-merge')
var commonTestConfig = require('./webpack.test.common.js')

module.exports = webpackMerge(commonTestConfig, {
    // in order to ignore built-in modules like path, fs, etc.
    target: 'node',

    externals: [
        // in order to ignore all modules in node_modules folder (faster)
        nodeExternals()
    ]
})
