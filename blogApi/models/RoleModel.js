const mongoose = require("mongoose");
const Schema = mongoose.Schema
//const UserModel = require("./UserModel");



let RoleSchema = new Schema({
  userId:[{
    type:Schema.Types.ObjectId,
    ref:"User",
    required:true
  }],
  title:{
    type:String,
    unique:true,
    required:true,
    default:"user"
  }
},{
  timestamps:true
})

let Roles = mongoose.model("Role",RoleSchema)
module.exports = Roles