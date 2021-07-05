
const express=require('express');

const {getproducts,post_product,delete_product,update_product} = require('../controllers/product')
const{authMiddleware}= require('../middleware/userAuth')
const {authAdmin} = require('../middleware/AdminAuth')

const router=express.Router();
router.get('/',getproducts)
router.post('/newProduct',authMiddleware, authAdmin, post_product)
router.delete('/:id',authMiddleware, authAdmin, delete_product)
   
router.put('/:id',authMiddleware, authAdmin,update_product)



module.exports = router
