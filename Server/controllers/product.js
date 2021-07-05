const Product= require('../models/productschema');



   exports.getproducts= async(req, res) =>{
            try {
                const product = await Product.find().sort({date:-1}).populate('-__v');
                res.status(200).json(product);
              } catch (error) {
                res.status(500).json({ message: `something went wrong : ${error}` });
              }
            };
            
            
   
    exports.post_product= async(req, res) =>{
        try {
            const {product_id, title, price, description, images, category, countInStock} = req.body;
            if(!images) return res.status(400).json({msg: "No image upload"})

            const product = await Product.findOne({product_id})
            if(product)
                return res.status(400).json({msg: "This product already exists."})

            const newProduct = new Product({
                product_id , title: title.toLowerCase(), price, description, images, category,countInStock
            })
console.log(newProduct)
            await newProduct.save()
            res.json({msg: "Created a product "})
           
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    exports.delete_product= async(req, res) =>{
        try {
            await Product.findByIdAndDelete(req.params.id)
        
            res.json({msg: "Deleted product"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    exports.update_product= async(req, res) =>{
        try {
            const {product_id,title, price, description, images, category,countInStock} = req.body;
            if(!images) return res.status(400).json({msg: "No image upload"})

            await Product.findOneAndUpdate({_id: req.params.id}, {product_id,
                title: title.toLowerCase(), price, description, images, category,countInStock
            })

            res.json({msg: "Updated  product"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }


