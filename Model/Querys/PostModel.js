//Modelo db
const Post = require('../Initialization/Post');
const Article = require('../Initialization/Article');
const Service = require('../Initialization/Service');

async function createPost(req,res){
    return await Post.create({
        cuenta: req.user,
        fecha_publicacion: Date.now(),
        costo: req.body.costo,
        divisa: req.body.divisa,
        intercambio: req.body.intercambio,
        descripcion: req.body.descripcion,
        activo: true,
        invisible: req.body.invisible
    })
}

async function deletePost(req, res){
    return await Post.update({
        activo: false
    },{
        where:{
            id: req.body.id,
            cuenta: req.user
        }
    })
}

async function updatePost(req,res){
    return await Post.update({
        costo: req.body.costo,
        divisa: req.body.divisa,
        intercambio: req.body.intercambio,
        descripcion: req.body.descripcion,
        invisible: req.body.invisible
    },{
        where:{
            id: req.body.id,        
            cuenta: req.user
        }
    })
}

async function allArticles(req,res){
    return await Post.findAll({
        where:{
            activo:true
        },
        include:[{
            model: Article,   
            required: true         
        }]
    })
}

async function allService(req,res){
    return await Post.findAll({
        where:{
            activo:true
        },
        include:[{
            model: Service,
            required: true           
        }]
    })
}

async function onePostService(id_post){
    return await Post.findOne({
        where:{
            activo:true,
            id: id_post
        },
        include:[{
            model: Service,
            required: true           
        }]
    })
}

async function onePostArticle(){
    return await Post.findOne({
        where:{
            activo:true,
            id: id_post
        },
        include:[{
            model: Article,
            required: true           
        }]
    })
}

module.exports = {
    createPost, deletePost, updatePost, allArticles, allService, onePostArticle, onePostService
}