//Modelo de la DB
const Account = require('../Initialization/Account');

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

async function deleteAccount(req, res){
    return await Account.update({
        activa:false
    },{
        where: {
            id_cuenta: req.user
        }
    })
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
    deleteAccount, updateAccount, createAccountLogger
}
