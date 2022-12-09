const mongoose = require("mongoose");
//const LikeModel = require("./LikeModel");



let CommentSchema = new Schema({
  content:{
    type:String,
    required:true
  },
  likes:{
    type:Schema.Types.ObjectId,
    ref:"Likes"
  },//[LikeModel]
},{
  timestamps:true
})

let Comment = mongoose.model("Comments",CommentSchema)
module.exports = Comment