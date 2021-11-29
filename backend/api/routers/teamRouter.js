const router = require('express').Router();

const {
    createTeamController,
    getAllTeamsController,
    updateTeamController,
    deleteTeamController,
} = require('../controllers/teamController');

const upload = require('../../middlewares/upload');

router.post('/', upload.single('file'), createTeamController);
router.get('/', getAllTeamsController);
router.put('/:id', upload.single('file'), updateTeamController);
router.delete('/:id', deleteTeamController);

module.exports = router;
