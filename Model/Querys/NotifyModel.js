const Notifications = require('../Initialization/Notifications');


async function searchMyNotifications(req, res){
    return await Notifications.findAll({
        where: {
            usuario_recibe: req.body.usuario_recibe,
            leido: false
        }
    })
}

const returnNotifications = async(req,res) => {
    try {
        const Notify = await searchMyNotifications(req, res);
        return res.status(200).json({Notify});
    } catch(error){
        res.status(500).send(error.message);
    }
}


async function createNotification(userSend, userReceive, type, description){
    await Notifications.create({
        usuario_recibe: userReceive,
        usuario_envia: userSend,
        tipo: type,
        descripcion: description,
        leido: false
    })
}

async function updateViewNotifications(req, res){
    await Notifications.update({
        leido: true
    } , {
        where: {
            id: req.body.id
        }
    }).then(post => {
        res.json(post);
    })
}

module.exports = {
    createNotification, returnNotifications, updateViewNotifications
}