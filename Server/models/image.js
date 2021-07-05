const mongoose = require('mongoose')


const ImageSchema = new mongoose.Schema({
    imagename: {
        type: String,
        
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("image", ImageSchema)