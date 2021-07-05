const express=require('express');
const {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
}= require ('../controllers/order')

const {authMiddleware} = require('../middleware/userAuth')

const router = express.Router()

router.post('/',authMiddleware, addOrderItems)
router.get('/myorders',authMiddleware, getMyOrders)
router.get('/:id',authMiddleware, getOrderById)
router.put('/:id/pay',authMiddleware, updateOrderToPaid)

module.exports = router
