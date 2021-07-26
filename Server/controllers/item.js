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
            console.log('hello')
            const { title, price, description, images, category, countInStock} = req.body;
            if(!images) return res.status(400).json({msg: "No image upload"})

            
            const newItem = new Item({
               title: title.toLowerCase(), price, description, images, category,countInStock
            })
              
            await newItem.save()
            res.json({msg: "Created an item "})
           
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }, 

    exports.delete_item= async(req, res) =>{
        try {
            await Item.findByIdAndDelete(req.params.id)
        
            res.json({msg: "Deleted item"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    exports.update_item= async(req, res) =>{
        try {
            const {item_id,title, price, description, images, category,countInStock} = req.body;
            if(!images) return res.status(400).json({msg: "No image upload"})

            await Item.findOneAndUpdate({_id: req.params.id}, {item_id,
                title: title.toLowerCase(), price, description, images, category,countInStock
            })

            res.json({msg: "Updated item"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }

   