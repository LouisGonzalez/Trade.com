//expres
const express = require('express');
//db
const Post = require('../Model/Querys/PostModel');
const BuyModel = require('../Model/Querys/BuyModel');
const WalletModel = require('../Model/Querys/WalletModel');
const PostModel = require('../Model/Querys/PostModel');
const ShopController = {};

ShopController.createCart = (req, res, next) => {
    if (req.session.cart != undefined) {
        //Nada :D
    } else {
        req.session.cart = []
    }
    next();
}

ShopController.addPost = async (req, res) => {
    const existe = existPost(req, res);
    if (!existe) {
        const post = await Post.onePost(req.body.id);

        req.session.cart.push({
            "id": req.body.id,
            "cantidad": req.body.cantidad,
            "divisa": post.divisa,
            "precio": post.costo
        });
    }
    res.send("B")
}

ShopController.getAll = (req, res) => {
    //for modificado
    res.json(req.session.cart);
}

ShopController.deleteAll = (req, res) => {
    req.session.cart = [];
    res.json(req.session.cart)
}

ShopController.deletePost = (req, res) => {
    req.session.cart.forEach((cart, index, object) => {
        if (cart.id == req.body.id) {
            object.splice(index, 1);
            res.json(req.session.cart);
        }
    })
}

ShopController.updateCart = (req, res) => {
    req.session.cart.forEach(cart => {
        if (cart.id == req.body.id) {
            cart.cantidad = req.body.cantidad;
        }
    });
    res.send("A")
}

function existPost(req, res) {
    existe = false;
    req.session.cart.forEach(cart => {
        if (cart.id == req.body.id) {
            cart.cantidad += req.body.cantidad;
            existe = true;
        }
    });
    return existe;
}

ShopController.buy = async (req, res) => {
    totalV = total(req);
    const stock = await ff(req,res);
    const wallet = await WalletModel.existWallet(req.user, req.session.cart[0].divisa);    
    console.log("el valor es: ", stock );
    if (wallet.monto >= totalV && stock) {
        await BuyModel.buy(req,res,totalV);
    } else {
        res.json("error no cuenta con suficiente dinero en su cuenta");
    }
}

async function ff(req,res){
    await req.session.cart.forEach(async(cart)=>{
        const post = await PostModel.onePostArticle(cart.id);        
        if(post.Article.dataValues.stock < cart.cantidad){
            return false;
        }
    });
    return true;
}

function total(req) {
    totalV = 0
    req.session.cart.forEach(cart => {
        cart.total = cart.precio * cart.cantidad;
        totalV += cart.total;
    });
    return totalV;
}


module.exports = ShopController;