const express=require('express');
const { register, login ,getuser} = require('../controllers/user');
const validateUser = require('../controllers/validateUser');
const { authAdmin } = require('../middleware/AdminAuth');
const { authMiddleware } = require('../middleware/userAuth');

const router=express.Router();

router.post('/newUser',validateUser, register)
router.post('/login', login)
router.get('/infor', authMiddleware, getuser)


module.exports=router;