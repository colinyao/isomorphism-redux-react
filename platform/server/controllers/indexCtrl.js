export default(req,res,next)=>{
      res.send(require('../mock').list())
}
