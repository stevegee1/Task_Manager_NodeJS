//this module handles the error when passed to next()
const {CustomAPIError}= require ("../error/error")
const errorHandler= (err,req,res,next)=>{
if (err instanceof CustomAPIError){
    return res.status(err.statusCode).json({message: err.message})
}   
res.status(404).json({msg:err.message})
    
}
module.exports= errorHandler