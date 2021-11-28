const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
    {
        userName: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    // eslint-disable-next-line comma-dangle
    { timestamps: true }
);

module.exports = model('User', UserSchema);
