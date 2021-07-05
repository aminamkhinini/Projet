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
      const{firstname,lastname,email,password}=req.body ;
      const existUser=await User.findOne({email:email}) ;
   if(existUser) return res.status(400).json({message:'You already have an acount'})
   if (password.length<5) return res.status(400).json({message:'Password is at least 5 character'})
   // Password Encryption
   const cryptPassword= await bcrypt.hash(password,12);
    const newUser=new User({firstname,lastname,password:cryptPassword,email});
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
