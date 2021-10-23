const express = require('express');
const Router = express.Router();
const Member = require('../Controller/MemberController');

const {isLoggedIn, isNotLoggedIn} = require('../Lib/auth');

Router.post('/createMember', Member.createMember);

module.exports = Router;