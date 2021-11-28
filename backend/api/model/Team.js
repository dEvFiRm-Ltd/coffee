const { Schema, model } = require('mongoose');

const TeamSchema = new Schema({
    memberNameq: {
        type: String,
        required: true,
        trim: true,
    },
    memberPosition: {
        type: String,
        trim: true,
    },
    memberImage: String,
    socialLink: {
        fb: String,
        linkdId: String,
        insta: String,
        twitter: String,
        github: String,
    },
    markatePlace: {
        upwork: String,
        freelancer: String,
        toptal: String,
    },
});

module.exports = model('Team', TeamSchema);
