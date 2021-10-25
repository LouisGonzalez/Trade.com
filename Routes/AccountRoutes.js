//Express
const express = require('express');
const Router = express.Router();



const Member = require('../Controller/MemberController');


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

//DELETE
Router.delete('/user', AccountController.deleteUser);

Router.get('/allUsers', AccountController.getUsers);

Router.post('/findAffiliates', Member.findAffiliates);




module.exports = Router;