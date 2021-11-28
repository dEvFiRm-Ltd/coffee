/* eslint-disable consistent-return */
/* eslint-disable import/no-unresolved */
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const setRouters = require('./api/routers/routes');
const setMiddleware = require('./middlewares/middleware');

const app = express();
setMiddleware(app);
setRouters(app);
app.use((req, res, next) => {
    const error = new Error(' page not found');
    error.status = 404;
    next(error);
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
    if (err.status === 404) {
        return res.status(404).json({
            status: 404,
            message: 'page not found',
        });
    }

    res.status(500).json({
        status: 500,
        message: 'internal server error',
    });
});
const PORT = process.env.PORT || 5000;
mongoose
    .connect('mongodb://localhost:27017/test')
    .then(() => {
        console.log('connected to mongodb');
        app.listen(PORT, () => {
            console.log(`Server started on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });
