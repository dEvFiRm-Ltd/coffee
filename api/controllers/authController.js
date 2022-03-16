/* eslint-disable no-underscore-dangle */
/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-unresolved
const bcrypt = require('bcrypt');
// eslint-disable-next-line import/no-unresolved
const jwt = require('jsonwebtoken');
// eslint-disable-next-line import/no-unresolved
const User = require('../model/User');

// eslint-disable-next-line consistent-return
exports.userSignupController = async (req, res) => {
    const { userName, email, password } = req.body;
    console.log(req.body);

    try {
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({
                message: 'Email already exists',
            });
        }
        const hashPass = await bcrypt.hash(password, 11);
        const newUser = await User.create({
            userName,
            email,
            password: hashPass,
        });
        res.status(201).json({
            message: 'User created successfully',
            user: newUser,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'User signup failed',
        });
    }
};
// eslint-disable-next-line consistent-return
exports.userLoingController = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: 'User does not exist',
            });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                message: 'Invalid password',
            });
        }
        const token = jwt.sign({ _id: user._id, userName: user.userName }, 'dEvFirM');

        res.status(200).json({
            message: 'User logged in successfully',
            token,
            user: {
                userName: user.userName,
                email: user.email,
            },
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'User login failed',
        });
    }
};
