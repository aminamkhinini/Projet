const jwt =require('jsonwebtoken')
require('dotenv').config();


exports.authMiddleware=async (req,res,next)=>{
const token= req.header('auth-token')
try {
  if (!token) res.status(401).json({message:'you are not authorazied'}) 
const verifyToken = await jwt.verify(token,process.env.SECRET_KEY)

if(!verifyToken) res.status(401).json({message:'wrong token'})
req.userId = verifyToken.id;
next();

} catch (error) {
    res.status(500).json({message:`something went wrong:${error}`}) 
}
}
