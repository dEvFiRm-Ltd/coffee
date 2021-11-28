const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    productImage: String,
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    feedback: {
        type: String,
        maxlength: 1500,
        minlength: 100,
    },
});

module.exports = model('Product', productSchema);
