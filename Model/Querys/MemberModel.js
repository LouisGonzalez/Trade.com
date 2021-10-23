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
            id_cuenta_empresarial: 1,
            id_usuario: req.body.id_usuario,
            fecha_cierre: {
                [Op.eq]: null
            }
        }
    })
    if(exist != null){
        console.log('Este usuario actualmente esta afiliado a esta cuenta');
        res.send('Este usuario actualmente esta afiliado a esta  cuenta');
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
    searchUsers, returnUsers, createMember
}