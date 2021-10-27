const express = require('express');
const passport = require('passport');

const CardModel = require('../Model/Querys/CardModel');
const SimulationBank = require('./SimulatorBank');
const WalletController = require('./WalletController');

const ExternalAccount = {};

ExternalAccount.CardView = async (req,res)=>{    
    //regresar vista     
}

ExternalAccount.addCardView = async (req,res)=>{
    //regresar vista agregar tarjeta
}

ExternalAccount.getCards = async(re,res)=>{
    const tarjeta = await CardModel.cards(req);
}

ExternalAccount.addCard = async (req,res) =>{    
    const card = await CardModel.existCard(req);
    if(card == undefined){
        if(SimulationBank.bankResponse){
            return await CardModel.createCard(req);
            //mensaje exito
        }else{
            //mensaje credito rechazado
            res.send("tarjeta ha sido rechazada por el banco");
        }
    }else{
        //tarjeta ya existe
        res.send("La tarjeta ya existe");
    }
}

ExternalAccount.deleteCard = async (req,res) =>{
    return await CardModel.deleteCard(req);
}

ExternalAccount.addCredit = async (req,res) =>{
    const card = await CardModel.existCard(req);
    if(card != undefined){
        if(SimulationBank.bankResponse){
            await WalletController.addCredit(req,res);
            //mensaje exito
        }else{
            //mensaje credito rechazado
        }
    }else{
        //tarjeta no existe
    }
}

module.exports = ExternalAccount;