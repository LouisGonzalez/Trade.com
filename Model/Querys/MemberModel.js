const Membership = require('../Initialization/Membership');
const { Op, DataTypes } =require('sequelize');
const Account = require('../Initialization/Account');
const Standard = require('../Initialization/StandardAccount');
const Post = require('../Initialization/Post');

async function searchUsers(){
    return await Account.findAll({
        include: {
            model: Standard
        }
    })
}

async function searchMyAffilities(req, res){
    return await Membership.findAll({
        where: {
            id_cuenta_empresarial: req.body.id_cuenta_empresarial
        },
        include: {
            model: Standard,
            include: {
                model:Account
            }
        }
    })    
}


const returnAffilites = async(req, res) => {
    try {
        const Affiliate = await searchMyAffilities(req, res);
        return res.status(200).json({Affiliate});
    } catch(error){
        return res.status(500).send(error.message);
    } 
}

const returnUsers = async (req, res) => {
    try {
        const Users = await searchUsers();
        return res.status(200).json({Users});
    } catch(error){
        return res.status(500).send(error.message);
    }
}

async function createMember(req, res)  {
    const exist = await Membership.findOne({
        where: {
            id_cuenta_empresarial: req.body.id_cuenta_empresarial,
            id_usuario: req.body.id_usuario,
            fecha_cierre: {
                [Op.eq]: null
            }
        }
    })
    if(exist != null){
        console.log('Este usuario actualmente esta afiliado a esta cuenta');
        res.json({menssage: 'Este usuario actualmente esta afiliado a esta  cuenta'});
    } else {
        await Membership.create({
            id_cuenta_empresarial: req.body.id_cuenta_empresarial,
            id_usuario: req.body.id_usuario,
            fecha_afiliacion: Date.now(),
            fecha_cierre: null
        }).then(post => {
            res.json(post);
        })
    }   
} 




module.exports = {
    searchUsers, returnUsers, createMember, returnAffilites
}