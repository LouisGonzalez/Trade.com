//Express
const express = require('express');
const Router = express.Router();

const {isLoggedIn} = require('../Lib/auth');

//Controlador
const AccountController = require('../Controller/AccountController');

//CREATE
Router.post('/user', AccountController.createUser);

//READ
Router.get('/user', AccountController.readUser);

//UPDATE
Router.patch('/user', AccountController.updateUser);

//DELETE
Router.delete('/user', AccountController.deleteUser);

module.exports = Router;