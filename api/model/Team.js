const { Schema, model } = require('mongoose');

const TeamSchema = new Schema({
    memberName: {
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
        facebook: String,
        linkdIn: String,
        instagram: String,
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
