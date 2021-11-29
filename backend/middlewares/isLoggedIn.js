/* eslint-disable space-infix-ops */

const jwt = require('jsonwebtoken');
const permission = (req, res, next) => {
    const { authorization } = req.headers;
    // console.log('here');
    try {
        // console.log(authorization);
        const token = authorization.split(' ')[1];
        const decoded = jwt.verify(token, 'dEvFirM');
        // console.log(decoded);
        const { userName, userId } = decoded;

        req.userName = userName;
        req.userId = userId;
        next();
    } catch (error) {
        console.log(error);
    }
};
module.exports = permission;
