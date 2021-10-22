const express = require('express');
const passport = require('passport');

const CardModel = new require('../Model/Querys/CardModel');

const ExternalAccount = {};

ExternalAccount.CardView = async (req,res)=>{    
    //regresar vista     
}

ExternalAccount.addCardView = async (req,res)=>{
    //regresar vista agregar tarjeta
}

ExternalAccount.getCards = async(re,res)=>{
    const tarjeta = await CardModel.tarjetas(req);
}

ExternalAccount.addCard = async (req,res) =>{
    return await CardModel.createCard(req);
}

ExternalAccount.deleteCard = async (req,res) =>{
    return await CardModel.deleteCard(req);
}

module.exports = ExternalAccount;