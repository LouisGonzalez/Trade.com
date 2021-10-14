//Express
const express = require('express');

const AccountModel = new require('../Model/Querys/AccountModel');

const AccountController = {};

AccountController.readUser = async (req,res)=>{
    const User = await AccountModel.readUserLoggedInformation(req);
    res.json(User);
}

AccountController.deleteUser = (req,res)=>{
    AccountModel.deleteAccount(req,res);
}

AccountController.updateUser = (req,res)=>{
    AccountModel.updateAccount(req,res);
}

module.exports = AccountController;