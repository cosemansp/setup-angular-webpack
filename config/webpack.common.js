const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const pkg = require('../package.json')
const helpers = require('./helpers');

const ENV = process.env.NODE_ENV || 'development';

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts'
  },

  resolve: {
    extensions: ['.ts', '.js']
  },

  module: {
    rules: [
      // typescript handling + angular2 template handing
      // see: https://github.com/TheLarkInn/angular2-template-loader
      {
        test: /\.ts$/,
        loaders: [
          {
            loader: 'awesome-typescript-loader',
            options: {
              configFileName: helpers.root('src', 'tsconfig.json')
            }
          },
          'angular2-template-loader'
        ],
        exclude: [/\.(spec)\.ts$/]
      },

      // to import 'mycomponent.html'
      {
        test: /\.html$/,
        loader: 'html-loader'
      },

      // to import images or fonts
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      },

      // handle all css files in the app folder as raw (string)
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loader: 'raw-loader'
      }
    ]
  },

  plugins: [
    // Workaround for angular/angular#11580
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      helpers.root('./src'), // location of your src
      {} // a map of your routes
    ),

    // split bundles
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),

    // inject process.env
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(ENV),
        VERSION: JSON.stringify(pkg.version),
      }
    }),

    // generate index.html file
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};

console.log('App Version: ', pkg.version)
console.log('Build Env: ', ENV)
