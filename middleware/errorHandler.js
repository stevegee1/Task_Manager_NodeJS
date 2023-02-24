//this module handles the error when passed to next()

const errorHandler= (err,req,res,next)=>{
   
res.status(404).json({msg:err.message})
    
}
module.exports= errorHandler