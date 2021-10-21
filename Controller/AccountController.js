//Express
const express = require('express');

const AccountModel = new require('../Model/Querys/AccountModel');

const AccountController = {};

AccountController.readUser = async (req,res)=>{
    const User = await AccountModel.readUserStandardLoggedInformation(req);
    if(User != null){
        console.log(User);
    }else{
        const UserB = await AccountModel.readUserBussinesLoggedInformation(req); 
        res.json(UserB);
    }    
}

AccountController.deleteUser = (req,res)=>{
    AccountModel.deleteAccount(req,res);
}

AccountController.updateUser = (req,res)=>{
    AccountModel.updateAccount(req,res);
}

module.exports = AccountController;