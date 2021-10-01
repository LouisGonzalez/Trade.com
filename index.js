const express = require('express');
const app = express();
const sequelize = require("./Model/Db");


const Models = require('./Model/CreateModels');
const PORT = process.env.PORT || 3000;




app.listen(PORT, function(){
    console.log(`la app ha sido arrancada en ${PORT}`);

    //Conexion a la base de datos
    sequelize.sync({force: true}).then(() => {
        console.log("Conexion establecida");
    }).catch(error => {
        console.log("Se ha producido un error al momento de intentar conectar con la db",error);
    })
})


