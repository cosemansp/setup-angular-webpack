var helpers = require('./helpers');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-source-map',

  resolve: {
    extensions: ['.ts', '.js']
  },

  resolveLoader: {
    // To bypass mocha-loader incompatibility with webpack :
    // mocha-loader still using loaders without the "-loader" suffix,
    // which is forbidden with webpack v2
    moduleExtensions: ['-loader']
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: [{
            loader: 'awesome-typescript-loader',
            options: {
              configFileName: helpers.root('tsconfig.json')
            }
          },
          'angular2-template-loader'
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        loader: 'html-loader'

      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'null-loader'
      },
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        loader: 'null-loader'
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loader: 'raw-loader'
      },
    ]
  },

  plugins: [
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      helpers.root('./src/app'),
      {}
    ),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('test'),   // inject test env
        VERSION: JSON.stringify('0.0.0'),
      }
    }),
  ],

  performance: {
    hints: false
  }
}
