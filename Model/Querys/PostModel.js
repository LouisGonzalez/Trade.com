//Modelo db
const Post = require('../Initialization/Post');

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


const searchPost = async (req, res) => {
    try {
        const post= await Post.findAll();
        return res.status(200).json({ post });
    } catch (error) {
        //si nuestra consulta falla tira un mensaje de error
        return res.status(500).send(error.message);
    }
};

module.exports = {
    createPost, deletePost, updatePost, searchPost
}