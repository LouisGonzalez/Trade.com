//Modelo de la DB
const Account = require('../Initialization/Account');

function createAccount(req,res){
    Account.create({
        user: req.body.user,
        fecha_creacion: req.body.fecha_creacion,
        pais: req.body.pais,
        telefono: req.body.telefono,
        correo: req.body.correo,
        extension: req.body.extension,
        password: req.body.password
    }).then(Account => {
        res.json(Account);
    })    
}

function createAccountLogger(req, pass){
    Account.create({
        user: req.body.user,
        fecha_creacion: req.body.fecha_creacion,
        pais: req.body.pais,
        telefono: req.body.telefono,
        correo: req.body.correo,
        extension: req.body.extension,
        password: pass
    })    
}

function oneAccount(req,res){
    Account.findByPk(req.body.id).then(Account => {
        res.json(Account);
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
    createAccount, oneAccount, deleteAccount, updateAccount, createAccountLogger
}