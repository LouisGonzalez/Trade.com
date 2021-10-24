const express = require('express');


function verifyCash(cantidad){
    if(cantidad <= 0){
        return false;
    } else {
        return true;
    }
}

function verifyStocks(amountBuy, amountStock){
    if(amountBuy > amountStock){
        return false;
    } else {
        return true;
    }
}

function randomBank(randomVal){
    if(randomVal%2 == 0){
        return true;
    } else {
        return false;
    }
}





module.exports.verifyCash = verifyCash;
module.exports.verifyStocks = verifyStocks;
module.exports.randomBank = randomBank;