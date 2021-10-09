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

    const $users = $('#usernames');


    $nickForm.submit(e => {
        e.preventDefault();
        socket.emit('new user', $nickname.val(), data => {
            
        });
    });

    //events
    $messageForm.submit( e => {
        e.preventDefault();
        socket.emit('send message', $messageBox.val());
        $messageBox.val('');
    });

    socket.on('new message', function (data) {
        $chat.append(data + '<br/>');
    });
});
