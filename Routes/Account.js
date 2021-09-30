const express = require('express');
const Router = express.Router();
const Account = require('../database/models/Account');

Router.get('/', (req, res) => {
    res.send('Funcionando');
});

//CREATE
Router.post('/', (req, res) => {
    Account.create({
        fecha_creacion: req.body.fecha_creacion,
        pais: req.body.pais,
        telefono: req.body.telefono,
        correo: req.body.correo,
        extension: req.body.extension,
        password: req.body.password
    }).then(Account => {
        res.json(Account);
    })
});

//READ
Router.get('/:id', (req, res) => {
    Account.findByPk(req.params.id).then(Account => {
        res.json(Account);
    }) 
});

//UPDATE
Router.patch('/:id', (req, res) => {
   Account.update({
       fecha_creacion: req.body.fecha_creacion,
       pais: req.body.pais,
       telefono: req.body.telefono,
       correo: req.body.correo,
       extension: req.body.extension,
       password: req.body.password
   }, {
       where: {
           id: req.params.id
       }
   }).then(result => {
       res.json(result);
   }); 
});

//DELETE
Router.delete('/:id', (req, res) => {
    Account.destroy({
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    })
});

module.exports = Router;