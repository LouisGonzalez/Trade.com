const express = require('express');

const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const server = createServer(app);
const io = new Server(server, { /* options */ })



const sequelize = require("./Model/Db");

   
const Models = require('./Model/CreateModels');
const PORT = process.env.PORT || 3002;

require('./Controller/Socket')(io);



app.use(express.static('View'));


server.listen(PORT, function(){
    console.log(`la app ha sido arrancada en ${PORT}`);

    //Conexion a la base de datos
    sequelize.query('SET FOREIGN_KEY_CHECKS = 0').then(
        sequelize.sync({force: false}).then(() => {
        console.log("Conexion establecida");
    }).catch(error => {
        console.log("Se ha producido un error al momento de intentar conectar con la db",error);
    }))
})


