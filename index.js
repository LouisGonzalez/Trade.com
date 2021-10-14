//Importaciones necesarias para express
const express = require('express');

//Socket.io
const { createServer } = require("http");
const { Server } = require("socket.io");
const app = express();
const server = createServer(app);
const io = new Server(server, { /* options */ })
require('./Controller/Socket')(io);


//Db
const sequelize = require("./Model/Db");
const Models = require('./Model/CreateModels');
const PORT = process.env.PORT || 3000;

//Passport
const passport = require('passport')
const session = require('express-session')
const mysqlstore = require('express-mysql-session')

//Rutas
const Account = require('./Routes/AccountRoutes');
const Logger = require('./Routes/LoggerRoutes');


//inicializaciones
require('./Lib/Passport');

//middleware
app.use(session({
    secret: 'comercioElectronico',
    resave:false,
    saveUninitialized:false,
  //  store: new mysqlstore(database)
}))
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static('View'));

//Agregar a app
app.use(Account);
app.use(Logger);


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


