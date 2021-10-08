const express = require('express');

const passport = require('passport');
const AccountModel = new require('../Model/Querys/AccountModel');

const LoggerController = {};

LoggerController.signupView = (req, res) =>{
    res.send("Redireccionar vista signup");
}

LoggerController.signup = passport.authenticate('local.signup',{
        successRedirect: '/profile',
        failureRedirect: '/signup',                
});    

LoggerController.loginView = (req, res) =>{
    res.send("Redirecciona vista login")
}

LoggerController.login = passport.authenticate('local.login',{
    successRedirect: '/profile',
    failureRedirect: '/signup',
})

LoggerController.profile = (req, res) =>{
    res.send("Este es el perfil");
}

LoggerController.logout = (req, res) =>{
    req.logOut();
    res.redirect('/login');
}

module.exports = LoggerController;