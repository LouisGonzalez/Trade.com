//Importaciones necesarias para express
const express = require('express');
const passport = require('passport')
const session = require('express-session')
const mysqlstore = require('express-mysql-session')
const cors = require("cors");
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')

const MySQLStore = require('express-mysql-session')(session);



//Importaciones necesarias para DB
const sequelize = require("./Model/Db");
const Models = require('./Model/CreateModels');
// const {database} = require('./config')
const {database} = require('./config');

//Definicion de puerto
const PORT = process.env.PORT || 3000;

//Rutas
const Account = require('./Routes/AccountRoutes');
const Logger = require('./Routes/LoggerRoutes');


//inicializaciones
const app = express();
require('./Lib/Passport');

//middleware
const corsOptions = {origin: "http://localhost:4200"}
app.use(cors({
    origin: "http://localhost:4200",
    credentials: true
}));
app.use(cookieParser());
app.use(bodyParser());
app.use(session({
    secret: 'comercioElectronico',
    resave: false,
    saveUninitialized: false,
    // cookie:{
    //     maxAge:36000000,
    //     httpOnly:true,
    //     secure:false
    // },
  //  store: new MySQLStore(database)
  //  store: new mysqlstore(database)
}))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(passport.initialize());
app.use(passport.session());


//Agregar a app
app.use(Account);
app.use(Logger);

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


