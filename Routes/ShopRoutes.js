//Express
const express = require('express');
const Router = express.Router();

const {isLoggedIn, isNotLoggedIn} = require('../Lib/auth');

const ShopController = require('../Controller/ShopController');

Router.use(isLoggedIn,ShopController.createCart);

Router.get('/Cart',isLoggedIn,ShopController.getAll)

Router.post('/Cart', isLoggedIn, ShopController.addPost);

Router.delete('/Cart', isLoggedIn, ShopController.deleteAll);

Router.patch('/Cart',isLoggedIn, ShopController.updateCart);


module.exports = Router;