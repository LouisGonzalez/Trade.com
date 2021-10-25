//Express
const express = require('express');
const Router = express.Router();

const {isLoggedIn} = require('../Lib/auth');

const SimulationBank = require('../Controller/SimulatorBank');

//Controlador
const AccountController = require('../Controller/AccountController');

//READ
Router.get('/logged', isLoggedIn,AccountController.readUser);

//UPDATE STANDARD
Router.patch('/user/standard', AccountController.updateUserStandard);

//UPDATE BUSINESS
Router.patch('/user/business', AccountController.updateUserBusiness);

Router.get('/allUser', isLoggedIn, AccountController.allUser);

//DELETE
Router.delete('/user', isLoggedIn,AccountController.deleteUser);

module.exports = Router;