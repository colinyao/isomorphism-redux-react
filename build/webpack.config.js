var webpack = require('webpack')
var path = require('path')
var includes = [
  path.resolve(__dirname, 'app'),
  path.resolve(__dirname, 'platforms')
]
var autoprefixer = require('autoprefixer')
let defaultSettings = require('./default');
let utils=require('./utils');
function resolve(dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = {
  entry:{
    app:['./app/index.js'],
    vendors: ['react','react-dom','react-router']
  },
  output: {
    path: defaultSettings.build.assetsRoot,
    filename: utils.assetsPath('js/[name].[hash].js'),
    chunkFilename: utils.assetsPath('js/chunks/[id].[hash].js')
  },
  resolve: {
    modules: ['node_modules', path.join(__dirname, '/node_modules')],
    extensions: ['.json', '.js', '.jsx'],
    alias: {
      actions: `${resolve('app')}/actions/`,
      components: `${resolve('app')}/components/`,
      stores: `${resolve('app')}/stores/`,
      'react/lib/ReactMount': 'react-dom/lib/ReactMount'
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [{
          loader: 'eslint-loader',
          options: {
            formatter: require('eslint-friendly-formatter')
          }
        }],
        enforce: 'pre',
        include: resolve('app')
      },{
        test: /\.css$/,
        use:[{
          loader:'style-loader'
        },{
          loader:'css-loader'
        }]
      }, {
         test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
         loader: 'url-loader',
         options: {
           limit: 10000,
           name: utils.assetsPath('images/[name].[hash:7].[ext]')
         }
       }, {
         test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
         loader: 'url-loader',
         options: {
           limit: 10000,
           name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
         }
       }, {
         test: /\.(mp4|ogg)$/,
         loader: 'file-loader',
         options: {
           name: utils.assetsPath('video/[name].[hash:7].[ext]')
         }
       }
    ]
  }
}
