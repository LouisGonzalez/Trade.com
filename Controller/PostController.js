const express = require('express');

const passport = require('passport');
const PostModel = new require('../Model/Querys/PostModel');
const ArticleModel = new require('../Model/Querys/ArticleModel');
const ServiceModel = new require('../Model/Querys/ServiceModel');

const PostController = {};


//Metodo get para obtener la vista
PostController.postView = (req,res)=>{    
    //AccountModel.oneAccount(req,res);
}

PostController.seeAllArticles = async (req,res)=>{
    const post = await PostModel.allArticles();
    res.json(post);   
}


PostController.seeAllService = async (req,res)=>{  
    const post = await PostModel.allService();
    res.json(post);
}

PostController.createArticle = async (req,res)=>{
    const post = await PostModel.createPost(req,res);
    await ArticleModel.createArticle(req,res,post.id);
    return res.status(200).json();
}

PostController.createService = async (req,res)=>{
    const post = await PostModel.createPost(req,res);
    await ServiceModel.createService(req,res,post.id);
    return res.status(200).json();
}

PostController.deletePost = async(req,res)=>{
    await PostModel.deletePost(req,res);
}

PostController.updateArticle = async(req, res)=>{
    const post = await PostModel.updateArticle(req,res);
    await ArticleModel.updateArticle(req,res,post.id);
}

PostController.updateService = async(req, res)=>{
    const post = await PostModel.updateArticle(req,res);
    await ServiceModel.updateService(req,res,post.id);
}

PostController.onePost = async (req, res) =>{
    const post = await PostModel.onePostArticle(req.params.id);
    const postB = await PostModel.onePostService(req.params.id);
    if(post != null){
        res.json(post);
    }else if(postB != null){        
        res.json(post);
    }else{
        res.send("No existe")
    }
}

module.exports = PostController;