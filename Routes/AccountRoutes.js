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

Router.get('/allUsers', AccountController.allUser);

Router.get('/user',isLoggedIn,AccountController.oneUser);

//UPDATE STANDARD
Router.patch('/user/standard', AccountController.updateUserStandard);

//UPDATE BUSINESS
Router.patch('/user/business', AccountController.updateUserBusiness);

//DELETE
Router.delete('/user', AccountController.deleteUser);


Router.post('/findAffiliates', Member.findAffiliates);




module.exports = Router;