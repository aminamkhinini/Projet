const Product= require('../models/Productschema');



   exports.get_products= async(req, res) =>{
            try {
                const product = await Product.find().sort({date:-1}).populate('-__v');
                res.status(200).json(product);
              } catch (error) {
                res.status(500).json({ message: `something went wrong : ${error}` });
              }
            };
            
            
   
    exports.post_product= async(req, res) =>{
        try {
           
            const { title, price, description, images, category, countInStock} = req.body;
            if(!images) return res.status(400).json({msg: "No image upload"})

            
            const newProduct = new Product({
               title: title.toLowerCase(), price, description, images, category,countInStock
            })
              console.log(newProduct)
              const product = await newProduct.save();
          
            res.status(200).json({product})
           
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }, 

   
    exports.delete_product= async(req, res) =>{
     
        try {
          
            const deleteProduct=await Product.findByIdAndDelete(req.params.id)
        console.log(deleteProduct)
            res.json({msg: "Deleted product"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    exports.update_product= async(req, res) =>{
      
        try {
            const {title, price, description, images, category,countInStock} = req.body;
            if(!images) return res.status(400).json({msg: "No image upload"})
            console.log(req.params.id)
            const updatedProduct= await Product.findOneAndUpdate({_id: req.params.id}, {
                title: title.toLowerCase(), price, description, images, category,countInStock
            },{new:true})

            res.json({updatedProduct})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }

   exports. getProductById = async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
        res.json(product)
    } else {
        res.status(404)
        throw new Error('Product Not Found')
    }
}