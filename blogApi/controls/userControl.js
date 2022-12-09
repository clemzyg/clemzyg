const UserModel = require("../models/UserModel");


exports.Register = async(req,res,next)=>{
  const {username,email,password} = req.body;
  
  try {
    await UserModel.create({
      username,email,password
    }).then(user => res.status(201).json({
      message:"User successfully created",
      user
    }))
  } catch (err) {
    res.status(401).json({
      message:"User not successfully created",
      error:err.message
    })
  }
}



exports.Login = async(req,res,next)=>{
  const {email,password,remember} = req.body
  
  if(!email || !password){
    return res.status(400).json({
      message:"Username or Password is missing"
    })
  }
  
  try {
    const user = await UserModel.findOne({email,password})
    if(!user){
      res.status(401).json({
        message:"Login unsuccessful",
        error:"User not found"
      })
    }else{
      //console.log(user.role,user.followers)
      //user.remember = remember
      res.status(200).json({
        message:"Login successful",
        user,
      })
    }
  } catch (err) {
    res.status(400).json({
      message:"An error occured",
      error:err.message
    })
  }
}






exports.Update = async(req,res,next)=>{
  const {role,id} = req.body;
  
  if(role && id){
    
    if(role === "admin"){
      await UserModel.findById(id)
      .then((user)=>{
        
        if(user.role !== "admin"){
          user.role = role;
          user.save((err)=>{
            if(err){
              res.status(400).json({
                message:"An error occured",
                error:err.message
              });
              process.exit(1);
            }
            res.status(201).json({message:"Update successful",user})
          })
        }else{
          res.status(400).json({message:"User is already an Admin"})
        }
      })
    }else{
      res.status(400).json({
        message:"Role is not admin"
      })
    }
  }else{
    res.status(400).json({
      message:"Role or Id not present"
    })
  }
}