
const express=require('express');

const {get_items,post_item,delete_item,update_item} = require('../controllers/item')
const{authMiddleware}= require('../middleware/userAuth')
const {authAdmin} = require('../middleware/AdminAuth')
const upload =require('../middleware/multer')
const router=express.Router();
router.get('/',get_items)
router.post('/newItem',authMiddleware, authAdmin,upload.single('Baby') ,post_item)
router.delete('/:id',authMiddleware, authAdmin, delete_item)
   
router.put('/:id',authMiddleware, authAdmin,update_item)



module.exports = router


