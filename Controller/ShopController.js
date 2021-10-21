//expres
const express = require('express');
//db
const Post = require('../Model/Querys/PostModel');
const ShopController = {};

ShopController.createCart = (req,res,next) => {    
    if(req.session.cart!=undefined){
        //Nada :D
    }else{
        req.session.cart = []              
    }
    next();
}

ShopController.addPost = (req,res)=>{   
    if(!existPost(req,res)){            
        req.session.cart.push({
            "id": req.body.id,
            "cantidad":req.body.cantidad
        });
    }
    res.send("B")
}

ShopController.getAll= (req,res)=>{
    //for modificado
    console.log(req.session.cart);    
}

ShopController.deleteAll = (req,res)=>{
    res.session.cart = [];
}

ShopController.deletePost = (req,res)=>{

}

ShopController.updateCart = (req,res)=>{
    req.session.cart.forEach(cart => {
        if(cart.id == req.body.id){
            cart.cantidad = req.body.cantidad;            
        }        
    });
    res.send("A")
}

function existPost(req,res){
    req.session.cart.forEach(cart => {
        if(cart.id == req.body.id){
            cart.cantidad+=req.body.cantidad;
            return true;                    
        }        
    });
}


module.exports = ShopController;
