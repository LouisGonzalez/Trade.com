
module.exports = function(io){

    
    io.on('connection', socket => {
        console.log('Nuevo usuario conectado');

        //escuchando
        socket.on('send message', function(data) {
            io.sockets.emit('new message', data);
        })

    });    
}


