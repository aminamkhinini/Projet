const Item= require('../models/Itemschema');



   exports.get_items= async(req, res) =>{
            try {
                const item = await Item.find().sort({date:-1}).populate('-__v');
                res.status(200).json(item);
              } catch (error) {
                res.status(500).json({ message: `something went wrong : ${error}` });
              }
            };
            
            
   
    exports.post_item= async(req, res) =>{
        try {
           
            const { title, price, description, images, category, countInStock} = req.body;
            if(!images) return res.status(400).json({msg: "No image upload"})

            
            const newItem = new Item({
               title: title.toLowerCase(), price, description, images, category,countInStock
            })
              console.log(newItem)
              const item = await newItem.save();
          
            res.status(200).json({item})
           
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }, 

   
    exports.delete_item= async(req, res) =>{
     
        try {
          
            const deleteItem=await Item.findByIdAndDelete(req.params.id)
        console.log(deleteItem)
            res.json({msg: "Deleted item"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    exports.update_item= async(req, res) =>{
      
        try {
            const {title, price, description, images, category,countInStock} = req.body;
            if(!images) return res.status(400).json({msg: "No image upload"})
            console.log(req.params.id)
            const updatedProduct= await Item.findOneAndUpdate({_id: req.params.id}, {
                title: title.toLowerCase(), price, description, images, category,countInStock
            },{new:true})

            res.json({updatedProduct})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }

   