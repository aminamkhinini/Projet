const User=require('../models/Userschema')

exports.authAdmin = async (req, res, next) =>{
    try {
        // Get user information by id
        const user = await User.findOne({_id:req.userId})
        if(User.role ==='user')
       
            return res.status(400).json({msg: "Admin resources access denied"})

        next()
        
    } catch (err) {
        console.log(err)
        return res.status(500).json({msg: err.message})
    }
}
