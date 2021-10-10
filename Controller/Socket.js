const Account = require('../Model/Querys/AccountModel');


module.exports = async function(io){

    var user = "";
    io.on('connection', socket => {
        console.log('Nuevo usuario conectado');
        socket.on('new user', (data, cb) => {
            user = data;
        });

        //escuchando
        socket.on('send message', function(data, data2) {
            io.sockets.emit('new message', data, data2);
        })

    });    
}


