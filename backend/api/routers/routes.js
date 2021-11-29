const navigationRouter = require('./navigationRouter');
const authRouter = require('./authRouter');
const contactUsRouter = require('./contactUsRouter');
const heroRouter = require('./heroRouter');

const routers = [
    {
        path: '/navigation',
        handeler: navigationRouter,
    },
    {
        path: '/user',
        handeler: authRouter,
    },
    {
        path: '/contactus',
        handeler: contactUsRouter,
    },
    {
        path: '/hero',
        handeler: heroRouter,
    },
    {
        path: '/',
        handeler: (req, res) => {
            res.send('Hello World');
        },
    },
];

module.exports = (app) => {
    routers.forEach((router) => {
        if (router.path === '/') {
            app.get(router.path, router.handeler);
        } else {
            app.use(router.path, router.handeler);
        }
    });
};
