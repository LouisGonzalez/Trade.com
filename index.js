//Importaciones necesarias para express
const express = require('express');
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')



//Cors
const cors = require('cors');

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

const {database} = require('./key');


//Definicion de puerto
const PORT = process.env.PORT || 3000;

//Passport
const passport = require('passport')
const session = require('express-session')
const mysqlstore = require('express-mysql-session')
const MySQLStore = require('express-mysql-session')(session);

//Rutas
const Account = require('./Routes/AccountRoutes');
const Logger = require('./Routes/LoggerRoutes');
const Post = require('./Routes/PostRoutes');
const Card = require('./Routes/CardsRoutes');
const Search = require('./Routes/SearchRoutes');
const AuthRoutes = require('./Routes/AuthRoutes');
const Member = require('./Routes/MemberRoutes');
const Notify = require('./Routes/NotifyRoutes');


//inicializaciones
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
    store: new MySQLStore(database)

}))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(passport.initialize());
app.use(passport.session());

app.use(express.static('View'));

//Agregar a app
app.use(Account);
app.use(Logger);
app.use(Post);
app.use(Card);
app.use(Search);
app.use(AuthRoutes);
app.use(Member);
app.use(Notify);


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