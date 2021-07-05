const express=require('express');

const{ getCategories,createCategory,deleteCategory,updateCategory} = require('../controllers/category')
const{ authMiddleware }= require('../middleware/userAuth')
const{authAdmin} = require('../middleware/AdminAuth')

const router=express.Router();
router.get('/',getCategories)    
router.post('/',authMiddleware,authAdmin,createCategory)
router.delete('/:id',authMiddleware,authAdmin,deleteCategory)
router.put('/:id',authMiddleware,authAdmin,updateCategory)
   
module.exports = router
