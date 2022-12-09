const mongoose = require("mongoose");
let Schema = mongoose.Schema




const BlogSchema = new Schema({
  author:{
    type:Schema.Types.ObjectId,
    ref:"User"
  },
  title : {
    type:String,
    required:true
  },
  snippet:{
    type:String,
    required:false
  },
  content:{
    type:String,
    required:true
  },
  tags:{
    type:Schema.Types.ObjectId,
    ref:"Tags"
  },
  image:{
    type:String,
    default:"blog.jpg"
  },
  comments:{
    type:Schema.Types.ObjectId,
    ref:"Comments"
  },
  likes:{
    type:Schema.Types.ObjectId,
    ref:"Likes"
  }
},{
  timestamps:true
})


let Blog = mongoose.model("Blogs",BlogSchema)
module.exports = Blog