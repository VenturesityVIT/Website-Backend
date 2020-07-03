const HackParticipation = require('../models/hackParticipation');

exports.register = async (req, res, next) => {

    const { hackName, form } = req.body;
    
    // HackParticipation

    console.log(hackName, form);
    res.status(200).json();
}