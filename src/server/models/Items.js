const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    tags: {
        type: Array,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
});

const Item = mongoose.model('item', itemSchema);

module.exports = Item;