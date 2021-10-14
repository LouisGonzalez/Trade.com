//Express
const express = require('express');
const Router = express.Router();

const {isLoggedIn} = require('../Lib/auth');

//Controlador
const AccountController = require('../Controller/AccountController');

//READ
Router.get('/logged', isLoggedIn,AccountController.readUser);

//UPDATE
Router.patch('/user', AccountController.updateUser);

//DELETE
Router.delete('/user', AccountController.deleteUser);

module.exports = Router;