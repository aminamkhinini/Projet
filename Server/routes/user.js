const express=require('express');
const { register, login ,getuser,getUserProfile,
    updateUserProfile} = require('../controllers/user');
const validateUser = require('../controllers/validateUser');

const { authMiddleware } = require('../middleware/userAuth');

const router=express.Router();

router.post('/newUser',validateUser, register)
router.post('/login', login)
router.get('/infor', authMiddleware, getuser)

router.put('/profile',authMiddleware, updateUserProfile)

module.exports=router;



