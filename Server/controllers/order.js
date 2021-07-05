const catchAsync= require('express-async-handler');

const Order= require ('../models/orderschema')

exports. addOrderItems = async (req, res) => {
    try {
        const {
            orderItems,
            shippingAddress,
            shippingPrice,
            paymentMethod,
            taxPrice,
            itemsPrice,
            totalPrice,
          } = req.body
       
          if (orderItems && orderItems.length === 0) return res.status(400).json({msg:"No Order Items"})
            
           else {
            const order = await Order.create({
              orderItems,
              shippingAddress,
              shippingPrice,
              paymentMethod,
              taxPrice,
              itemsPrice,
              totalPrice,
              user: req.userId,
            })
        console.log(order)
            res.status(201).json(order)
          }
        } 
    catch (err) {
        return res.status(500).json({msg: err.message})
    }
}
exports. getOrderById = catchAsync(async (req, res, next) => {
    const order = await Order.findById(req.params.id).populate( 'user',
    ' email')
  
    if (order) {
        console.log(order)
      res.status(200).json(order)
    } else {
      res.status(404)
      throw new Error('Order not Found')
    }
  })
    
  exports. updateOrderToPaid = catchAsync(async (req, res) => {
    const order = await Order.findById(req.params.id)
  
    if (order) {
      order.isPaid = true
      order.paidAt = Date.now()
      order.paymentResult = {
        id: req.body.id,
        status: req.body.status,
        update_time: req.body.update_time,
        email_address: req.body.user.email_address,
      }
  
      const updatedOrder = await order.save()
      res.status(200).json(updatedOrder)
    } else {
      res.status(404)
      throw new Error('Order not Found')
    }
  })
    
  exports. getMyOrders = catchAsync(async (req, res) => {
    const orders = await Order.find({ user: req.userId })
  
    res.status(200).json(orders)
  })
  




