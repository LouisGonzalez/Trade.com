const express = require('express');

const WalletModel = require('../Model/Querys/WalletModel');
const TransactionModel = require('../Model/Querys/TransactionModel');
const WalletController = require('../Controller/WalletController');

const TransactionController = {};

TransactionController.transaction = async (req,res) => {
    const wallet = await WalletModel.existWallet(req.user, req.body.divisa);
    console.log(wallet);
    if(wallet.monto >= req.body.monto){
        const transaction = await TransactionModel.createTransaction(req,res);
        const add = await WalletController.addCreditWallet(req.body.cuenta_receptora,req.body.divisa,req.body.monto);
        const drawals = await WalletController.withdrawalsCreditWallet(req.user,req.body.divisa,req.body.monto);
        res.json("si");
    }    
}

module.exports = TransactionController;