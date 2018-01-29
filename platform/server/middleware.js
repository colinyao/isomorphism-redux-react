var path = require('path')
var ejs = require('ejs')

var router = require('./routes')
var config = require('../common/config')
var bodyParser = require('body-parser')


export default (app) => {
  // reg middlewares
  app.use(bodyParser.urlencoded({ extended: false }));


  // template ejs

  app.set('view engine', 'html');
  app.engine('.html', ejs.__express);
  app.set('views', __dirname + '/views');

  // router dispatcher
  router(app)

  // 500 error



  // 404
  app.use(async (req,res) => {
    req.status = 404
    await res.render('404')
  })
}
