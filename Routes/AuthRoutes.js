const express = require('express');
const Router = express.Router();
const Auth = require('../Controller/AuthController');

const {isLoggedIn, isNotLoggedIn} = require('../Lib/auth');

Router.post('/verification',Auth.sender);

module.exports = Router;