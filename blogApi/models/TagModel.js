const mongoose = require("mongoose");
const UserModel = require("./UserModel");



let TagSchema = new Schema({
  tagged:[UserModel]
},{
  timestamps:true
})

let Tags = mongoose.model("Tags",TagSchema)
module.exports = Tags