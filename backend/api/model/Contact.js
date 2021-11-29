const { Schema, model } = require('mongoose');

const contactSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 50,
            trim: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
            trim: true,
        },
        details: {
            type: String,
            required: true,
            maxlength: 1500,
        },
        image: String,
    },
    // eslint-disable-next-line prettier/prettier
    { timestamps: true },
);
module.exports = model('Contact', contactSchema);
