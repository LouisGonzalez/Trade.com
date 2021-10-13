//Modelo db
const BusinessAccount = require('../Initialization/BusinessAccount');

async function createAccount(req){
    return await BusinessAccount.create({
        id_cuenta: req.body.id,
        cuenta_general: req.body.id,
        empresa: req.id.nombre,
        mision: req.body.mision,
        vision: req.body.vision,
        descripcion: req.body.descripcion        
    })
}

async function deleteAccount(req, res){
    return await BusinessAccount.destroy({
        where: {
            id: req.body.id
        }
    })/*.then(result => {
        res.json(result);
    })*/
}

async function updateAccount(req,res){
    return await BusinessAccount.update({            
        telefono: req.body.telefono,
        correo: req.body.correo,
        extension: req.body.extension,
        password: req.body.password
    }, {
        where: {
            id: req.body.id
        }
    })/*.then(result => {
        res.json(result);
    });*/
}

module.exports ={
    createAccount, deleteAccount, updateAccount
}