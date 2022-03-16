const Hero = require('../model/Hero');

exports.heroGetController = async (req, res) => {
    try {
        const hero = await Hero.find();
        res.json(hero);
    } catch (err) {
        console.log(err);
        res.json({ message: err.message });
    }
};
exports.heroPostController = async (req, res) => {
    const hero = new Hero({
        title: req.body.title,
        heroimage: ' ',
        description: req.body.description,
        text: req.body.text,
        url: req.body.url,
    });
    if (req.file) {
        hero.heroimage = req.file.filename;
    }
    try {
        const newHero = await hero.save();
        res.json(newHero);
    } catch (err) {
        console.log(err);
        res.json({ message: err.message });
    }
};
exports.heroPutController = async (req, res) => {
    if (req.file) {
        req.body.heroimage = `/uploads/${req.file.filename}`;
    }
    try {
        const hero = await Hero.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.json(hero);
    } catch (err) {
        console.log(err);
        res.json({ message: err.message });
    }
};
exports.heroDeleteController = async (req, res) => {
    try {
        await Hero.findByIdAndDelete(req.params.id);
        res.json({ message: 'Hero deleted' });
    } catch (err) {
        console.log(err);
        res.json({ message: err.message });
    }
};
