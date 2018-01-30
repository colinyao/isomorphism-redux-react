import {match} from 'react-router'
import routes from '../../../app/routes'  //获取到前端定义的路由
import renderCtrl from '../controllers/serverRender'  //封装好的支出页面的方法



export default async (req,res,next)=>{
   try{
     const location={routes:routes,location:req.path}
     match(location, (error, redirectLocation, renderProps) => {
         if (redirectLocation) {
           res.redirect(redirectLocation.pathname + redirectLocation.search);
           //重定向要添加pathname+search
         } else if (error) {
           console.error('ROUTER ERROR:', pretty.render(error));
           res.status(500);
         } else if (renderProps) {
              renderCtrl(req,res,renderProps)
         } else {
           res.status(404).send('Not found');
         }
       });
   }catch(e){
       return e
   }
}
