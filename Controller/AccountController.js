//Express
const express = require('express');

const StandardAccountModel = require('../Model/Querys/StandardAccountModel');
const BusinessAccountModel = require('../Model/Querys/BusinessAccountModel');
const AccuntModel = require('../Model/Querys/AccountModel');

const AccountController = {};

AccountController.createUser = async function(req){    
    if(req.body.empresa!=undefined){
        await BusinessAccountModel.createAccount(req);        
     }else{
        await StandardAccountModel.createAccount(req);
     }
}

AccountController.readUser = (req,res)=>{    
//AccountModel.oneAccount(req,res);
}

AccountController.deleteUser = (req,res)=>{    
    AccuntModel.deleteAccount(req,res);
    req.logOut();
    res.redirect('/login');
}

AccountController.updateUser = (req,res)=>{
    AccountModel.updateAccount(req,res);
}

module.exports = AccountController;