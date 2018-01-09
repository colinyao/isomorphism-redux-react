import {mock} from 'mockjs'


export function list(){
   return{
       code:200,
       msg:'ok',
       result:mock({
           name:@ctitle,
           abstract:@cparagraph(2,3),
           date:@date
       })

   }
}

export function detail(){
   return{
      code:200,
      msg:'ok',
      result:mock({
         content:@cparagraph(7)
      })
   }
}
