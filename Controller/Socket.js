const Account = require('../Model/Querys/AccountModel');


module.exports = function(io){

    
    io.on('connection', socket => {
        console.log('Nuevo usuario conectado');
        socket.on('new user', (data, cb) => {
            Account.oneAccount2(data);
            
        });

        //escuchando
        socket.on('send message', function(data) {
            io.sockets.emit('new message', data);
        })

    });    
}


