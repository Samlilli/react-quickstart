var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');


// Build variables
var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');

// Define plugins

var indexHtmlPlugin = new HtmlWebpackPlugin({
  filename: 'index.html',
  template: `${APP_DIR}/index.html`,
  //favicon: `${APP_DIR}/assets/favicon.ico`,
  hash: true,
  inject: 'body',
});

const plugins = [
  indexHtmlPlugin
]

var config = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    APP_DIR + '/index.js'
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
   loaders : [
     {
       test : /\.js$/,
       include : APP_DIR,
       loader : 'babel',
       exclude: /node_modules/
     },
     {
        test: /\.scss$/,
        loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass-loader'
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
   ]
 },
 plugins: plugins
};

module.exports = config;
