const express=require('express');
const {
  get_orders,
  checkout
}= require ('../controllers/order')

const { authMiddleware } = require('../middleware/userAuth');

const router = express.Router()



router.get('/:id',authMiddleware,get_orders);
router.post('/:id',authMiddleware,checkout);

module.exports = router;
