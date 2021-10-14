//Express
const express = require('express');
const Router = express.Router();
const PostController = require('../Controller/PostController');

const {isLoggedIn, isNotLoggedIn} = require('../Lib/auth');

Router.get('/post',isNotLoggedIn,PostController.postView);

Router.post('/post/Service', isLoggedIn, PostController.createService);

Router.post('/post/Article',isLoggedIn,PostController.createArticle);

Router.delete('/post',isLoggedIn,PostController.deletePost);

Router.patch('/post/Service',isLoggedIn, PostController.updateService);

Router.patch('/post/Article',isLoggedIn, PostController.updateArticle);

Router.get('/post/:id', isLoggedIn,PostController.onePost);


module.exports = Router;