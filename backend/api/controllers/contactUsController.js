const ContactUs = require('../model/ContactUs');

exports.contactUsGetController = async (req, res) => {
    try {
        const contactUs = await ContactUs.find();
        res.status(200).json({
            status: 200,
            data: contactUs,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            status: 500,
            message: err.message,
        });
    }
};
exports.contactUsPostController = async (req, res) => {
    const {name, email, phone, details } = req.body;
    const contactUs = new ContactUs({
        name,
        email,
        phone,
        details,
    });
    if (req.file) {
        contactUs.image = `/uploads/${req.file.filename}`;
    }

    try {
        const contact = await ContactUs.create(contactUs);
        res.status(201).json({
            status: 201,
            data: contact,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            status: 500,
            message: err.message,
        });
    }
};
exports.contactUsSignleGetController = async (req, res) => {
    try {
        const contact = await ContactUs.findById(req.params.id);
        res.status(200).json({
            status: 200,
            data: contact,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            status: 500,
            message: err.message,
        });
    }
};
