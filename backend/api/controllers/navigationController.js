/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/extensions
const Navigation = require('../model/Navigation');

exports.navigationGetConroller = (req, res) => {
    Navigation.find()
        .then((navigation) => {
            res.status(200).json({ navigation });
        })
        .catch((err) => {
            res.status(500).json({
                error: err,
            });
        });
};

exports.navigationPostController = async (req, res) => {
    const { title, slug, sequence } = req.body;
    // eslint-disable-next-line no-const-assign
    const sequenceint = Number.parseInt(sequence, 10);
    try {
        const navigation = await Navigation.create({ title, slug, sequence: sequenceint });
        res.status(201).json({ navigation });
    } catch (err) {
        res.status(400).json({
            error: err,
        });
    }
};

exports.navigationPutController = async (req, res) => {
    const { title, slug, sequence } = req.body;
    // eslint-disable-next-line no-const-assign
    const sequenceint = Number.parseInt(sequence, 10);
    try {
        const navigation = await Navigation.findByIdAndUpdate(req.params.id, {
            title,
            slug,
            sequence: sequenceint,
        });
        res.status(200).json({ navigation });
    } catch (err) {
        res.status(400).json({
            error: err,
        });
    }
};
exports.navigationDeleteController = async (req, res) => {
    try {
        await Navigation.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: 'Deleted',
        });
    } catch (err) {
        res.status(400).json({
            error: err,
        });
    }
};
