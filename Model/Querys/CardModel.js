const Card = require('../Initialization/Card');

async function createCard(req,res){
    return await Card.create({
        id_cuenta: req.user,
        fecha_corte: req.body.fecha_corte.fecha_corte,
        codigo_seguridad: req.body.codigo_seguridad,
        no_tarjeta: req.body.tarjeta,
        activa: true   
    })
}

async function deleteCard(req){
    return await Card.update({
        activa: false
    },{
        where: {
            id_cuenta: req.user
        }        
    })
}

async function tarjetas(req){
    return await Card.findAll({
        where:{
            no_cuenta: req.user
        }
    })
}

module.exports = {
    createCard, deleteCard, tarjetas
}