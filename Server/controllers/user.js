const User=require('../models/Userschema')
const jwt=require('jsonwebtoken')
const bcrypt=require('bcryptjs')
const { body, validationResult } = require('express-validator');
require('dotenv').config();
exports.register= async(req,res)=>{
    try {
      const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array() });
    }
      const{name,email,password}=req.body ;
      const existUser=await User.findOne({email:email}) ;
   if(existUser) return res.status(400).json({message:'You already have an acount'})
   if (password.length<5) return res.status(400).json({message:'Password is at least 5 character'})
   // Password Encryption
   const cryptPassword= await bcrypt.hash(password,12);
    const newUser=new User({name,password:cryptPassword,email});
    console.log(newUser)
     // Save mongodb
    const user= await newUser.save()
  // Then create jsonwebtoken to authentication
    const token= await jwt.sign({email,id:user._id},process.env.SECRET_KEY);
    res.status(200).json({User:user ,token})
   
} catch (error) {

      res.status(500).json({message:`something went wrong:${error}`})  
    }
}
exports.login = async(req,res)=>{
  try {
    const{email, password}=req.body;
    const  existUser =await User.findOne({email:email}) ;
 if(!existUser) res.status(400).json({message:'this email does not exist'});
  const validatePassword=await bcrypt.compare(password,existUser.password);
  if(!validatePassword) res.status(400).json({message:'wrong password!'});
 // If login success , create access token and refresh token
  const token= await jwt.sign({email, id:existUser._id},process.env.SECRET_KEY);
  res.status(200).json({User: existUser,token});
console.log({User: existUser,token})
} catch (error) {;
    res.status(500).json({message:`something went wrong:${error}`})
  }
}

exports.getuser= async (req, res) =>{
  try {
     const user = await User.findById(req.userId).select('-password')
      if(!user) return res.status(400).json({msg: "User does not exist."})

      res.json(user)
  } catch (err) {
      return res.status(500).json({msg: err.message})
  }
}

// @desc Update user profile
// @route PUT /user/profile
// @access Private
exports.updateUserProfile = async (req, res) => {
  try{
    const user = await User.findById(req.userId)

    if (user) {
        // Check which fields were sent in the request else just keep them the same
        user.name = req.body.name || user.name
       
        user.email = req.body.email || user.email
        // Check if password was sent with request
        if (req.body.password) {
            user.password = req.body.password
        }
        const updateUser = await user.save()
  
        res.json({
          id: updateUser._id,
          name: updateUser.name,
          email: updateUser.email,
           role: updateUser.role,
           
            
        })
    } else {
        res.status(404)
        return Error('User not found')
    }
  }
  catch (err) {
    return res.status(500).json({msg: err.message})
}
 
}
