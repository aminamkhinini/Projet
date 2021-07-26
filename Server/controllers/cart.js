
const Cart = require('../models/Cartschema');
const Item = require('../models/Itemschema');

module.exports.get_cart_items = async (req,res) => {
    try{
        const cart = await Cart.findById(req.params.id).populate( 'user',
        ' email')
      
        if (cart) {
            console.log(cart)
          res.status(200).json(cart)
    }
    else {
        res.status(404)
        throw new Error('Cart not Found')
      }
    }
    catch(err){
        console.log(err);
        res.status(500).send("Something went wrong");
    }
}


module.exports. add_cart_item = async (req, res) => {
    try {
        const {
            userId,
            items,
            bill
           }
          = req.body
       
          if (items && items.length === 0) return res.status(400).json({msg:"No Order Items"})
            
           else {
            const cart = await Cart.create({
              items,
              userId,
              bill
            })
        console.log(cart)
            res.status(201).json(cart)
          }
        } 
    catch (err) {
        return res.status(500).json({msg: err.message})
    }
}
module.exports.delete_item = async (req,res) => {

   try{

        const cart = await Cart.findById(req.params.id);
        if (cart) {
          const deleteCart = await cart.remove();
          res.send({ message: 'cart empty', cart: deleteCart });
        }
    }
        catch (err) {
            return res.status(500).json({msg: err.message})
        }
    };

