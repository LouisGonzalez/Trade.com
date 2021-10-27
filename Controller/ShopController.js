//expres
const express = require('express');
//db
const Post = require('../Model/Querys/PostModel');
const TransactionModel = require('../Model/Querys/TransactionModel');
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
    const existe = existPost(req,res);
    console.log(existe);
    if(!existe){  
        const post = Post.onePost(req.body.id);
        req.session.cart.push({
            "id": req.body.id,
            "cantidad":req.body.cantidad,
            "divisa": post.divisa,
            "precio": post.precio
        });
    }
    res.send("B")
}

ShopController.getAll= (req,res)=>{
    //for modificado
    res.json(req.session.cart);    
}

ShopController.deleteAll = (req,res)=>{
    req.session.cart = [];
}

ShopController.deletePost = (req,res)=>{
    req.session.cart.forEach((cart, index, object)=>{
        if(cart.id == req.params.id){
            object.splice(index,1);
        }
    })
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
    existe = false;
    req.session.cart.forEach(cart => {
        if(cart.id == req.body.id){
            cart.cantidad+=req.body.cantidad;
            existe = true;                             
        }        
    });
    return existe;
}

ShopController.buy = async (req,res) =>{
    total = total(req);
    const a = TransactionModel.buy(req,res,total);
    console.log(a);
}

function total(req){
    total = 0
    req.session.cart.forEach(cart => {
        total+=cart.precio * cart.cantidad;     
    });
    return total;
}


module.exports = ShopController;