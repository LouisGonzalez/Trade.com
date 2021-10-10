const Message = require('../Initialization/Message');

function createMessage(req, res){
    Message.create({
        id_conversacion: req.body.id_conversacion,
        mensaje: req.body.mensaje,
        fecha: req.body.fecha
    }).then(Message => {
        res.json(Message);
    })
}

function searchMessageByPK(req, res){
    Message.findByPk(req.body.id).then(Message => {
        res.json(Message);
    })
}



module.exports = {
    createMessage, searchMessage
}

//Borrar y actualizar para despues.
