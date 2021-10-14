//Importaciones necesarias para express
const express = require('express');
const passport = require('passport');
const session = require('express-session');
const mysqlstore = require('express-mysql-session');

//Importaciones necesarias para DB
const sequelize = require("./Model/Db");
const Models = require('./Model/CreateModels');
const {database} = require('./config');


//Definicion de puerto
const PORT = process.env.PORT || 3000;

//Rutas
const Account = require('./Routes/AccountRoutes');
const Logger = require('./Routes/LoggerRoutes');
const Post = require('./Routes/PostRoutes');


//inicializaciones
const app = express();
require('./Lib/Passport');

//middleware
app.use(session({
    secret: 'comercioElectronico',
    resave:false,
    saveUninitialized:false,
}))
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());


//Agregar a app
app.use(Account);
app.use(Logger);
app.use(Post);

//Inicialización del server
app.listen(PORT, function(){
    console.log(`la app ha sido arrancada en ${PORT}`);

    //Conexion a la base de datos
    sequelize.query('SET FOREIGN_KEY_CHECKS = 0').then(
        sequelize.sync({force: false}).then(() => {
        console.log("Conexion establecida");
    }).catch(error => {
        console.log("Se ha producido un error al momento de intentar conectar con la db",error);
    }))
})


