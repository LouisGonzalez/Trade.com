$(function (){
    alert('Works');
    const socket = io();
    //Obteniendo los elementos del dom, desde la interfaz
    const $messageForm = $('#message-form');
    const $messageBox = $('#message');
    const $chat = $('#chat');

    //Obteniendo los elementos del DOM, desde el nickname
    const $nickForm = $('#nickForm');
    const $nickError = $('#nickError');
    const $nickname = $('#nickname');

    const $userReceive = "sergio";
    const $typeConversation = false;        //Si la conversacion es anonima o no
    const $users = $('#usernames');


    $nickForm.submit(e => {
        e.preventDefault();
        socket.emit('new user', $nickname.val());
    });

    //events
    $messageForm.submit( e => {
        e.preventDefault();
        socket.emit('send message', $messageBox.val(), $nickname.val(), $userReceive, $typeConversation);
        $messageBox.val('');
    });

    socket.on('new message', function (data, userSend, userReceive) {
        $chat.append(data + " enviado por: " + userSend + " recibido por: " + userReceive + '<br/>');

    });

    socket.on('whisper', data => {
        $chat.append(`<p class="whisper"><b>${data.nick}</b>: ${data.data}</p>`);
    });

    socket.on('old messages', (msgs) => {
        for(let i = 0; i < msgs.length; i++){
            displayMsg(msgs[i]);
        }
    });
    
    function displayMsg(data) {
        $chat.append(
          `<p class="p-2 bg-secondary w-75 animate__animated animate__backInUp"><b>${data.cuenta_emisora}</b>: ${data.mensaje}</p>`
        );
        const chat = document.querySelector("#chat");
        chat.scrollTop = chat.scrollHeight;
    }
    
});
