


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    images:{
        type: String,
        required: true
    },

    category:{
        type: String,
        required: true
    },
   
    countInStock: {
        type: Number,
        required: true,
      },
    date_added: {
        type: Date,
        default: Date.now
    },
});

module.exports = Product= mongoose.model('product',ProductSchema);
