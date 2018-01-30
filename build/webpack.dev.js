'use strict';

let path = require('path');
let webpack = require('webpack');
let baseConfig = require('./webpack.config');
let defaultSettings = require('./default');
let merge = require('webpack-merge')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

Object.keys(baseConfig.entry).forEach(function(name) {
  baseConfig.entry[name] = ['react-hot-loader','webpack-hot-middleware/client?timeout=20000'].concat(baseConfig.entry[name])
})

let config=merge(baseConfig,{
  cache:true,
  devtool: 'eval-source-map',
  plugins: [
  new webpack.DefinePlugin({
    'process.env': defaultSettings.dev.env
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'manifest',
    chunks: ['vendor']
  }),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  // https://github.com/ampedandwired/html-webpack-plugin
  new FriendlyErrorsPlugin()

]
})

config.module.rules.push({
  test: /\.(js|jsx)$/,
  loader:'babel-loader',
  exclude: /node_modules/,
  include: [].concat(
    [path.join(__dirname, '/../app')]
  )
});

module.exports=config
