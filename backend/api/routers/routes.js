const navigationRouter = require('./navigationRouter');

const routers = [
    {
        path: '/about',
        handeler: (req, res) => {
            res.send('about');
        },
    },
    {
        path: '/router',
        handeler: (req, res) => {
            res.send('from router');
        },
    },
    {
        path: '/navigation',
        handeler: navigationRouter,
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
