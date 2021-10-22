//Modelo de la DB
const Account = require('../Initialization/Account');
const StandardAccount = require('../Initialization/StandardAccount');
const BusinessAccount = require('../Initialization/BusinessAccount');

async function createAccountLogger(req, pass){
    return await Account.create({
        id_cuenta: req.body.id,
        user: req.body.user,
        fecha_creacion: Date.now(),
        pais: req.body.pais,
        telefono: req.body.telefono,
        correo: req.body.correo,
        extension: req.body.extension,
        password: pass,   
        activa: true
    })     
}

async function readUserStandardLoggedInformation(req){
    return await Account.findAll({
        where:{
            id_cuenta:req.user
        },
        include:[{
            model: StandardAccount,
            required: true           
        }]
    });
}

async function readUserBussinesLoggedInformation(req){
    return await Account.findAll({
        where:{
            id_cuenta:req.user
        },
        include:[{
            model: BusinessAccount,
            required: true           
        }]
    });
}

async function deleteAccount(req, res){
    return await Account.update({
        activa:false
    },{
        id_cuenta: req.user
    })     
}

async function readUserLoggedInformation(req){
    return await Account.findOne({where:{id_cuenta:req.user}});
}


async function updateAccount(req,res){
    return await Account.update({        
        pais: req.body.pais,
        telefono: req.body.telefono,
        correo: req.body.correo,
        extension: req.body.extension,
        password: req.body.password
    }, {
        where: {
            id_cuenta: req.user
        }
    })
}

module.exports = {
    deleteAccount, updateAccount, createAccountLogger, readUserStandardLoggedInformation, readUserBussinesLoggedInformation
}
