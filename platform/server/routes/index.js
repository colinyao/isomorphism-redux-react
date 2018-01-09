import {match} from 'react-router'
import routes from '../../../app/routes'




export default async (req)=>{
   try{
     const location={routes:routes,location:req.location}
     match(location, (error, redirectLocation, renderProps) => {
         if (redirectLocation) {
           res.redirect(redirectLocation.pathname + redirectLocation.search);
           //重定向要添加pathname+search
         } else if (error) {
           console.error('ROUTER ERROR:', pretty.render(error));
           res.status(500);
         } else if (renderProps) {
              console.log(renderProps)

         } else {
           res.status(404).send('Not found');
         }
       });
     }
   }catch(e){

   }
}
