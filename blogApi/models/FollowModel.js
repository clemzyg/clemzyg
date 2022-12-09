const mongoose = require("mongoose");
const Schema = mongoose.Schema
const UserModel = require("./UserModel");



let FollowSchema = new Schema({
  userId:[UserModel]
},{
  timestamps:true
})

let Likes = mongoose.model("Followers",FollowSchema)
module.exports = Likes