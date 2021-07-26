


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    item_id:{
        type: String,
        unique: true,
        trim: true,
        required: true
    },
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

module.exports = Item = mongoose.model('item',ItemSchema);
