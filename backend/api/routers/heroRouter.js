const router = require('express').Router();

const {
    heroGetController,
    heroPostController,
    heroPutController,
    heroDeleteController,
} = require('../controllers/heroController');

const upload = require('../../middlewares/upload');

router.get('/', heroGetController);
router.post('/', upload.single('file'), heroPostController);
router.put('/:id', heroPutController);
router.delete('/:id', heroDeleteController);

module.exports = router;
