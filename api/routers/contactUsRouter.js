const router = require('express').Router();
const {
    contactUsGetController,
    contactUsPostController,
    contactUsSignleGetController,
} = require('../controllers/contactUsController');
const upload = require('../../middlewares/upload');

router.get('/', contactUsGetController);
router.post('/', upload.single('file'), contactUsPostController);
router.get('/:id', contactUsSignleGetController);

module.exports = router;
