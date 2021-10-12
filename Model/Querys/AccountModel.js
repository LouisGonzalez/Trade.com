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
        password: pass        
    })     
}

function createPersonalAccount(req){
    StandardAccount.create({
        id_cuenta: req.body.id,
        nombres: req.body.nombre,
        apellidos: req.body.apellido,
        fecha_nacimiento: req.body.nacimiento
    })
}

function createBusinessAccount(req){
    BusinessAccount.create({
        id_cuenta: req.body.id,
        empresa: req.id.nombre,
        mision: req.body.mision,
        vision: req.body.vision,
        descripcion: req.body.descripcion        
    })
}

function deleteAccount(req, res){
    Account.destroy({
        where: {
            id: req.body.id
        }
    }).then(result => {
        res.json(result);
    })
}

function updateAccount(req,res){
    Account.update({
        fecha_creacion: req.body.fecha_creacion,
        pais: req.body.pais,
        telefono: req.body.telefono,
        correo: req.body.correo,
        extension: req.body.extension,
        password: req.body.password
    }, {
        where: {
            id: req.body.id
        }
    }).then(result => {
        res.json(result);
    });
}

module.exports = {
    deleteAccount, updateAccount, createAccountLogger, createPersonalAccount, createBusinessAccount
}