const router = require('express').Router();
const {
    contactUsGetController,
    contactUsPostController,
} = require('../controllers/contactUsController');
const upload = require('../../middlewares/upload');

router.get('/', contactUsGetController);
router.post('/', upload.single('file'), contactUsPostController);

module.exports = router;
