const { Schema, model } = require('mongoose');

const HeroSchema = new Schema({
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
});

module.exports = model('Hero', HeroSchema);
