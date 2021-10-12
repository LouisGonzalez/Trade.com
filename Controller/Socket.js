const Account = require('../Model/Querys/AccountModel');
const Message = require('../Model/Querys/Message');
const Conversation = require('../Model/Querys/Conversation');

var users = {};
var boolSms = {};

module.exports = async function(io){

    io.on('connection', async socket => {
        console.log('Nuevo usuario conectado');
        socket.on('new user', (data, cb) => {
            if(data in users){
              cb(false);
            } else {
              cb(true);
              socket.nickname = data;
              users[data] = socket.id;
              updateNicknames();
            }
        });

        //escuchando
        socket.on('send message', async function(data, userSend, userReceive) {
            initConv = userSend+userReceive;
            initConv2 = userReceive+userSend;          
            conversation = await Conversation.searchAndGive(userSend, userReceive);
            if(initConv in boolSms || initConv2 in boolSms){

            } else {
              boolSms[initConv] = socket.id;
              console.log('entro aqui :D');
            let messages = await Message.searchConversation(conversation.id);
              io.to(users[userReceive]).emit('old messages', messages);
              io.to(users[userSend]).emit('old messages', messages);
            }


            idSend = await Conversation.searchUserId(userSend);
            idReceive = await Conversation.searchUserId(userReceive);
            existConv = await Conversation.search(userSend,userReceive);
            if(existConv == 0){  //No existe la conversacion, toca crearla
              await Conversation.create(idSend.id_cuenta, idReceive.id_cuenta, false);
            } 
            //crear el mensaje
            await Message.createInSocket(conversation.id, data, idSend.id_cuenta, idReceive.id_cuenta, new Date().toISOString().slice(0, 19).replace('T', ' ')); //Falta la fecha como ultimo parametro
            //io.sockets.emit('new message', data, userSend, userReceive);
            if(userReceive in users){
              io.to(users[userReceive]).emit('whisper', {
                data,
                nick: userSend
              });
            }
        })

    });    


    function updateNicknames(){
      io.sockets.emit('usernames', Object.keys(users));
    }
}


