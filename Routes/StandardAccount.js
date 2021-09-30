const express = require('express');
const Router = express.Router();
const Standard = require('../Model/CRUDS/StandardAccount');

Router.get('/', (req, res) => {
    res.send('Funcionando');
});

//CREATE
Router.post('/', (req, res) => {
    Standard.create({
        id_cuenta: req.body.id_cuenta,
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        username: req.body.username,
        fecha_nacimiento: req.body.fecha_nacimiento,
        fecha_creacion_cuenta: req.body.fecha_creacion_cuenta
    }).then(Standard => {
        res.json(Standard);
    })
});

//READ
Router.patch('/:id', (req, res) => {
    Standard.findByPk(req.params.id).then(Standard => {
        res.json(Standard);
    })
});

//UPDATE
Router.patch('/:id', (req, res) => {
    Standard.update({
        id_cuenta: req.body.id_cuenta,
        nombres: req.body.nombres,
        apellidos: req.body.apellidos,
        username: req.body.username,
        fecha_nacimiento: req.body.fecha_nacimiento,
        fecha_creacion_cuenta: req.body.fecha_creacion_cuenta
    }, {
        where: {
            id: req.body.id
        }
    }).then(result => {
        res.json(result);
    })
});


//DELETE
Router.delete('/:id', (req, res) => {
    Standard.destroy({
        where: {
            id: req.body.id
        }
    }).then(result => {
        res.json(result)
    })
});

module.exports = Standard;