const navigationRouter = require('./navigationRouter');
const authRouter = require('./authRouter');

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
