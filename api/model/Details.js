const { Schema, model } = require('mongoose');

const detailsSchema = new Schema({
    logo: [
        {
            type: String,
            required: true,
        },
    ],
    favicon: String,
    title: String,
    description: String,
    author: String,
    links: {
        facebook: String,
        twitter: String,
        instagram: String,
        linkedin: String,
        github: String,
        markatePlace: String,
    },
});

module.exports = model('Details', detailsSchema);
