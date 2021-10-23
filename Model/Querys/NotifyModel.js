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


async function createNotification(req, res){
    await Notifications.create({
        usuario_recibe: req.body.usuario_recibe,
        usuario_envia: req.body.usuario_envia,
        tipo: req.body.tipo,
        descripcion: req.body.descripcion,
        leido: false
    }).then(post => {
        res.json(post);
    })
}

module.exports = {
    createNotification, returnNotifications
}