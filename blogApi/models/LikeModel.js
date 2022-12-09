const mongoose = require("mongoose");
const UserModel = require("./UserModel");



let LikeSchema = new Schema({
  users:[UserModel],
  likes:{
    type:Number,
    default:0
  }
},{
  timestamps:true
})

let Likes = mongoose.model("Likes",LikeSchema)
module.exports = Likes