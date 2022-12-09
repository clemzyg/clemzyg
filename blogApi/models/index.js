let mongoose = require("mongoose")
let dotenv = require("dotenv")
dotenv.config()


let connection = async()=>{
  try {
    await mongoose.connect(process.env.MONGO,{
      useNewUrlParser:true,
      useUnifiedTopology:true
    })
    console.log("MONGODB connected")
  } catch (e) {
    console.log(e.message)
  }
  
}


module.exports = connection