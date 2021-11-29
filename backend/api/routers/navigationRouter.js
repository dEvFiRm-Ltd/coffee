const router = require('express').Router();
const {
    navigationGetConroller,
    navigationPostController,
    navigationPutController,
    navigationDeleteController,
} = require('../controllers/navigationController');

const permisstion = require('../../middlewares/isLoggedIn');

router.get('/', permisstion, navigationGetConroller);
router.post('/', navigationPostController);
router.put('/:id', navigationPutController);
router.delete('/:id', navigationDeleteController);

module.exports = router;
