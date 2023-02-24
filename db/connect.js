
//This module handles connection to MongoDB by exporting connectDB to app.js 
//to ensure the app is connected to the database before connection to the localhost
const mongoose= require("mongoose")
mongoose.set('strictQuery', false)


const connectDB= (url)=>{
   return mongoose.connect(url);   

}

module.exports=connectDB