const { Router } = require('express');
const {get_cart_items,
    add_cart_item,
    delete_item} = require('../controllers/cart');
    const { authMiddleware } = require('../middleware/userAuth');
const router = Router();

router.get('/:id',authMiddleware,get_cart_items);
router.post('/',authMiddleware,add_cart_item);
router.delete('/:id',authMiddleware,delete_item);

module.exports = router;
