//Express
const express = require('express');

const AccountModel = new require('../Model/Querys/AccountModel');

const AccountController = {};

AccountController.createUser = (req, res) => {    
    AccountModel.createAccount(req,res);
}

AccountController.readUser = (req,res)=>{    
    AccountModel.oneAccount(req,res);
}

AccountController.deleteUser = (req,res)=>{
    AccountModel.deleteAccount(req,res);
}

AccountController.updateUser = (req,res)=>{
    AccountModel.updateAccount(req,res);
}

module.exports = AccountController;