
const express=require('express');

const {get_products,post_product,delete_product,update_product,getProductById} = require('../controllers/product')
const{authMiddleware}= require('../middleware/userAuth')
const {authAdmin} = require('../middleware/AdminAuth')

const router=express.Router();
router.get('/',get_products)
router.get('/:id',getProductById)
router.post('/newProduct',authMiddleware, authAdmin,post_product)
router.delete('/:id',authMiddleware, authAdmin, delete_product)
   
router.put('/:id',authMiddleware, authAdmin,update_product)



module.exports = router


