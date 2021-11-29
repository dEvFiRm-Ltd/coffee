const Team = require('../model/Team');

exports.createTeamController = async (req, res) => {
    const team = new Team({
        memberName: req.body.memberName,
        memberPosition: req.body.memberPosition,
        memberImage: '',
        socialLink: {
            facebook: req.body.facebook,
            linkdIn: req.body.linkdIn,
            instagram: req.body.instagram,
            twitter: req.body.twitter,
            github: req.body.github,
        },
        markatePlace: {
            upwork: req.body.upwork,
            freelancer: req.body.freelancer,
            toptal: req.body.toptal,
        },
    });
    if (req.file) {
        team.memberImage = req.file.filename;
    }

    try {
        const newTeam = await Team.create(team);
        res.status(201).json({
            message: 'Team created successfully',
            newTeam,
        });
    } catch (err) {
        res.status(500).json({
            error: err.message,
        });
    }
};
exports.getAllTeamsController = async (req, res) => {
    try {
        const team = await Team.find();
        res.status(200).json({
            team,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: err.message,
        });
    }
};
exports.updateTeamController = async (req, res) => {
    const team = new Team({
        memberName: req.body.memberName,
        memberPosition: req.body.memberPosition,
        memberImage: '',
        socialLink: {
            facebook: req.body.facebook,
            linkdIn: req.body.linkdIn,
            instagram: req.body.instagram,
            twitter: req.body.twitter,
            github: req.body.github,
        },
        markatePlace: {
            upwork: req.body.upwork,
            freelancer: req.body.freelancer,
            toptal: req.body.toptal,
        },
    });
    if (req.file) {
        team.memberImage = `/uploads/${req.file.filename}`;
    }

    try {
        const updateteam = await Team.findByIdAndUpdate(req.params.id, team, {
            new: true,
            runValidators: true,
        });
        res.status(200).json({
            message: 'Team updated successfully',
            updateteam,
        });
    } catch (err) {
        res.status(500).json({
            error: err.message,
        });
    }
};
exports.deleteTeamController = async (req, res) => {
    try {
        await Team.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: 'Team deleted successfully',
        });
    } catch (err) {
        res.status(500).json({
            error: err.message,
        });
    }
};
