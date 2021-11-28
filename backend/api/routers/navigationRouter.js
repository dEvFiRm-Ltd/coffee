const router = require('express').Router();
const {
    navigationGetConroller,
    navigationPostController,
    navigationPutController,
    navigationDeleteController,
} = require('../controllers/navigationController');

router.get('/', navigationGetConroller);
router.post('/', navigationPostController);
router.put('/:id', navigationPutController);
router.delete('/:id', navigationDeleteController);

module.exports = router;
