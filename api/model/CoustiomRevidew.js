const { Schema, model } = require('mongoose');

const coustomRevidewSchema = new Schema({
    productId: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: ' User',
        required: true,
    },
    review: {
        type: String,
        required: true,
        minlength: 100,
        maxlength: 1500,
    },
    start: [
        {
            giveStar: {
                type: Number,
                required: true,
            },
            user: {
                type: Schema.Types.ObjectId,
                ref: 'User',
                required: true,
                createAt: {
                    type: Date,
                    default: new Date(),
                },
            },
        },
    ],
});

module.exports = model('CoustomRevidew', coustomRevidewSchema);
