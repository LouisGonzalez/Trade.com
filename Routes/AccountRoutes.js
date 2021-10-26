//Express
const express = require('express');
const Router = express.Router();


const SearchController = require('../Controller/SearchController');
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



//RUTAS MemberRoutes
Router.post('/findAffiliates', Member.findAffiliates);
Router.post('/createMember', Member.createMember);

//RUTAS SearchRoutes
Router.get('/searchStandard', SearchController.findStandardUsers);
Router.get('/search',SearchController.findPost);


//Rutas BusinessRoutes
Router.post('/getIdBusiness', AccountController.getIdBusiness);

module.exports = Router;