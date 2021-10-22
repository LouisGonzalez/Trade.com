//Express
const express = require('express');

const StandardAccountModel = require('../Model/Querys/StandardAccountModel');
const BusinessAccountModel = require('../Model/Querys/BusinessAccountModel');
const AccountModel = require('../Model/Querys/AccountModel');

const AccountController = {};

AccountController.createUser = async function(req){    
    if(req.body.empresa != undefined){
        await BusinessAccountModel.createAccount(req);        
    }else{
        await StandardAccountModel.createAccount(req);
    }
}

AccountController.readUser = async (req,res)=>{
    const User = await AccountModel.readUserStandardLoggedInformation(req);
    if(User != null){
        res.json(User);
    }else{
        const UserB = await AccountModel.readUserBussinesLoggedInformation(req); 
        res.json(UserB);
    }  /*  
    const User = await AccountModel.readUserLoggedInformation(req);    
    res.json(User);*/
}

AccountController.deleteUser = async (req,res)=>{    
    await AccountModel.deleteAccount(req,res);
    req.logOut();
    res.redirect('/login');
}

AccountController.updateUserStandard = async (req,res)=>{
    await AccountModel.updateAccount(req,res);
    await StandardAccountModel.updateAccount(req);    
}

AccountController.updateUserBusiness = async (req,res)=>{
    await AccountModel.updateAccount(req,res);    
    await BusinessAccountModel.updateAccount(req);
}

module.exports = AccountController;