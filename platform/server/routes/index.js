
/**
 * [Server端 路由请求处理]
 */
export default async (app)=>{

  app.get('/',async (req,res,next)=>{

    //如果是异步接口请求，直接返回json数据
    if(req.path.match(/^\/api/)){
        await require('./api')(app)
    }else{
      //如果页面请求，则调用最终调用ServerRenderCtrl在服务端渲染处理输出
          await require('./render')(req,res,next);
    }

  })
}
