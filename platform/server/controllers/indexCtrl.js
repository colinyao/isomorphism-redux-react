export default async (req,res,next)=>{
      res.send(require('../mock').list())
}
