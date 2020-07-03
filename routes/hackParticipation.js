const express = require('express');
const Router = express.Router();

const { check, oneOf } = require('express-validator');

const hackParticipation = require('../controllers/hackParticipation');

Router.post('/register', hackParticipation.register);

module.exports = Router;