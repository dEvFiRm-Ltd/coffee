/* eslint-disable space-infix-ops */
const jwt = require('jsonwebtoken');

const permission = (req, res, next) => {
    const { authorization } = req.headers;
    try {
        const token = authorization.split(' ')[1];
        const decoded = jwt.verify(token, 'dEvFirM');
        const { userName, userId } = decoded;
        req.userName = userName;
        req.userId = userId;
        next();
    } catch (error) {
        next(error);
    }
};
module.exports = permission;
