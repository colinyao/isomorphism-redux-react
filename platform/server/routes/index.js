
/**
 * [Server端 路由请求处理]
 */
export default (app)=>{

  app.get('/*',(req,res,next)=>{

    //如果页面请求，则调用最终调用ServerRenderCtrl在服务端渲染处理输出
    if(!req.path.match(/^\/api/)&&!~req.path.indexOf('.')){
       require('./render')(req,res,next);
    }else{
      next()
    }
    //如果是异步接口请求，直接返回json数据
  },require('./api'))
}
