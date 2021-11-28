const express = require('express');
const morgan = require('morgan');

const middelwares = [morgan('dev'), express.json(), express.urlencoded({ extended: true })];

module.exports = (app) => {
    middelwares.forEach((middleware) => app.use(middleware));
};
