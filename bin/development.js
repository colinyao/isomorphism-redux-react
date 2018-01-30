require('babel-polyfill')
require('babel-core/register')({  //通过bable解决node支持import/export
  plugins: [
    // 忽略css文件
    ['babel-plugin-transform-require-ignore', {
      extensions: ['.less', '.css']
    }],
    //js替换
    ['inline-replace-variables', {
      __SERVER__: true
    }]
  ]
})
//返回图片路径
require('asset-require-hook')({
  extensions: ['jpg', 'jpeg', 'png', 'gif', 'svg', 'tif', 'tiff', 'webp'],
  name: '/build/[name].[ext]',
  limit: 10000
})
var config = require('../build/default')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var chokidar = require('chokidar')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('../build/webpack.dev')
var serverMiddleware=require('../platform/server/middleware')
// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack(webpackConfig)


var devMiddleware = require('webpack-dev-middleware')(compiler, {

  quiet: false,
  noInfo: false,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  port:port,
  stats: {
    colors: true
  }

})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: console.log,
  heartbeat: 10 * 1000
})

// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// // proxy api requests
// Object.keys(proxyTable).forEach(function (context) {
//   var options = proxyTable[context]
//   if (typeof options === 'string') {
//     options = { target: options }
//   }
//   app.use(proxyMiddleware(options.filter || context, options))
// })


// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

serverMiddleware(app)
// serve pure static assets


var uri = 'http://localhost:' + port

devMiddleware.waitUntilValid(function () {
  console.log('> Listening at ' + uri + '\n')
})
var watcher = chokidar.watch([
  path.join(__dirname, '../app'),
  path.join(__dirname, '../platforms')
])
watcher.on('ready', function () {
  watcher.on('all', function (e, p) {
    console.log("Clearing module cache");
    Object.keys(require.cache).forEach(function(id) {
      if (/[\/\\](app|platforms)[\/\\]/.test(id)) delete require.cache[id];
    });
  })
})
module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  console.log('start')
})
