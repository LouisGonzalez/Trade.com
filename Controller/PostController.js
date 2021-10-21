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
}

PostController.createService = async (req,res)=>{
    const post = await PostModel.createPost(req,res);
    await ServiceModel.createService(req,res,post.id);
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

PostController.onePost = (req, res) =>{

}

module.exports = PostController;