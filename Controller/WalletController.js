const express = require('express');
const Wallet = require('../Model/Querys/WalletModel');

const WalletController = {};

WalletController.createWallet = async (req,res) => {
    const walletUser = await Wallet.existWallet(req , res);
    if(walletUser == undefined){
        await Wallet.createWallet(req,res);
    }
}

WalletController.addCredit = async (req,res) =>{
    const walletUser = await Wallet.existWallet(req , res);
    if(walletUser == undefined){
        await Wallet.createWallet(req,res);
    }else{
        await Wallet.addCredit(req.res);
    }
}

WalletController.withdrawalsCredit = async (req,res) =>{
    const walletUser = await Wallet.existWallet(req , res);
    if(walletUser == undefined){
        res.json("error");
    }else{
        await Wallet.withdrawalsCredit(req,res);
    }
}