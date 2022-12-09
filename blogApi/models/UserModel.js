const mongoose = require("mongoose");
let Schema = mongoose.Schema
let posts = require("./BlogModel")
const RoleModel = require("./RoleModel");
const FollowModel = require("./FollowModel");



const UserSchema = new Schema({
  username : {
    type:String,
    required:true,
    unique:true,
    minlength:4
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true,
    minlength:6
  },
  //role:RoleModel,
  role:[{
    type:String,
    ref:"Roles",
    required:true,
    default:"user"
  }],
  image:{
    type:String,
    default:"default.jpg"
  },
  posts:[{
    type:Schema.Types.ObjectId,
    ref:"Blogs"
  }],
  followers : [{
    type:Schema.Types.ObjectId,
    ref:"Followers"
  }],
  remember:{
    type:Boolean,
    default:false
  }
},{
  timestamps:true
})


let User = mongoose.model("User",UserSchema)
module.exports = User