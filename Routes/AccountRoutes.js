//Express
const express = require('express');
const Router = express.Router();

const {isLoggedIn} = require('../Lib/auth');

//Controlador
const AccountController = require('../Controller/AccountController');

//READ
Router.get('/user', AccountController.readUser);

//UPDATE STANDARD
Router.patch('/user/standard', AccountController.updateUserStandard);

//UPDATE BUSINESS
Router.patch('/user/business', AccountController.updateUserBusiness);

//DELETE
Router.delete('/user', AccountController.deleteUser);

module.exports = Router;