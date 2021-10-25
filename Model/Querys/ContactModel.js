const Contact = require('../Initialization/ContactBook');

async function searchContacts(req, res){
    return await Contact.findAll({
        where: {
            cuenta: req.body.cuenta
        }
    })
}

const returnContacts = async (req, res) => {
    try {
        const Contacts = await searchContacts(req, res);
        return res.status(200).json({Contacts});
    } catch(error){
        return res.status(500).send(error.message);
    }
}

async function createContact(req, res){
    return await Contact.create({
        cuenta: req.body.cuenta,
        cuenta_contacto: req.body.cuenta_contacto,
        descripcion: req.body.descripcion,
        nickname: req.body.nickname
    }).then(post => {
        res.json(post);
    })
}

module.exports = {
    returnContacts, createContact
}