const { Schema, model } = require('mongoose');

const NavigationSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    slug: {
        type: String,
        trim: true,
    },
    Sequence: {
        type: Number,
        required: true,
    },
});

module.exports = model('Navigaion', NavigationSchema);