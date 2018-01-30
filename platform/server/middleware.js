var path = require('path')
var ejs = require('ejs')

var router = require('./routes')
var config = require('../../build/default')
var bodyParser = require('body-parser')
var express=require('express')

export default (app) => {
  // reg middlewares
  app.use(bodyParser.urlencoded({ extended: false }));


  // template ejs

  app.set('view engine', 'html');
  app.engine('.html', ejs.__express);
  app.set('views', __dirname + '/views');

  var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
  app.use(staticPath,express.static('static'))
  // router dispatcher
  router(app)
  //app.use(router)
  // 500 error



  // 404
  // app.use(async (req,res) => {
  //   req.status = 404
  //   await res.render('404')
  // })
}
