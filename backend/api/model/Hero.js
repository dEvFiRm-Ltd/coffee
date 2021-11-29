const { Schema, model } = require('mongoose');

const HeroSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        image: String,
        description: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
        url: String,
    },
    // eslint-disable-next-line comma-dangle
    { timestamps: true }
);
module.exports = model('Hero', HeroSchema);
