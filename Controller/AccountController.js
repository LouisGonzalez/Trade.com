//Express
const express = require('express');

const StandardAccountModel = require('../Model/Querys/StandardAccountModel');
const BusinessAccountModel = require('../Model/Querys/BusinessAccountModel');
const AccountModel = require('../Model/Querys/AccountModel');

const AccountController = {};

AccountController.createUser = async function(req){    
    console.log('Empresa',req.body.empresa);
    if(req.body.empresa != undefined){
        await BusinessAccountModel.createAccount(req);        
    }else{
        await StandardAccountModel.createAccount(req);
    }
}

AccountController.readUser = async (req,res)=>{
    // console.log("Hola\n",req);
    // const User = await AccountModel.readUserLoggedInformation(req);
    // console.log(User);
    // res.json(User);
    const User = await AccountModel.readUserStandardLoggedInformation(req);
    if(User != null){
        console.log(User);
        res.json(User);
    }else{
        const UserB = await AccountModel.readUserBussinesLoggedInformation(req); 
        console.log(UserB);
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

AccountController.allUser = async (req,res) =>{
    const a = await AccountModel.allUser(req,res);
    res.json(a);
}

module.exports = AccountController;