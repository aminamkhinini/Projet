const Order = require('../models/Orderschema');
const uuid = require('uuid')



// @desc Create a new order
// @route POST /orders
// @access Private
exports.addOrderItems = async (req, res) => {
    try{
       
        const {
            orderItems,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
        } = req.body
    
        // Make sure order is not empty
        if (orderItems && orderItems.length === 0) {
            res.status(400) // Bad request
    return Error('No order items')}
    else {
        const order = new Order({
            orderItems,
            user: req.userId,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
        })
        //console.log(("order===",order))

        const createdOrder = await order.save()
        //console.log(("createdorder===",createdOrder))


        res.status(201).json(createdOrder)
    }
   
} catch (err) {
    console.log('error===',err)
    return res.status(500).json({msg: err.message})
}

}
// @desc Get an order by the id
// @route GET /orders/:id
// @access Private
exports. getOrderById = async (req, res) => {
    try{
    const order = await Order.findById(req.params.id).populate(
        'user'
    )

    // if order exists else throw error
    if (order) {
      return  res.json(order)
    } else {
        res.status(404)
       return new Error('Order not found')
    }
}
 catch (err) {
     console.log('error egt details==',err)
    return res.status(500).json({msg: err.message})
}
}
// @desc Update order to paid
// @route PUT orders/:id/pay
// @access Private

exports.updateOrderToPaid = async (req, res) => {
    try{
    // Get order from DB
    const order = await Order.findById(req.params.id)

    // if order exists update the fields else throw error
    if (order) {
        order.isPaid = true
        order.paidAt = Date.now()
        order.paymentResult = {
            id:uuid.v4(),
            status: 'Paid',
            
        }
console.log('pay===',updateOrder)
        // Save the updated order in the DB
        const updatedOrder = await order.save()

        // Send back updated order
       return res.json(updatedOrder)
    } else {
        res.status(404)
       return Error('Could not update order')
    }
}

catch (err) {
    return res.status(500).json({msg: err.message})
}
}

// @desc Get logged in user orders
// @route PUT /orders/myorders
// @access Private
exports.getUserOrders = async (req, res) => {
    // Get orders from DB
    const orders = await Order.find({ user: req.userId })

    res.json(orders)
}
