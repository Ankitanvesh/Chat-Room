var socket = io.connect('http://localhost:3000');

var message= document.getElementById('message'),
    handle = document.getElementById('handle'),
    send = document.getElementById('send'),
    output =document.getElementById('output'),
    feedback= document.getElementById('feedback');

send.addEventListener('click', ()=>{
  socket.emit('message',{
      message : message.value ,
      handle : handle.value
  }) 
  message.value = "" ;

});

message.addEventListener('keypress',()=>{
  socket.emit('typing',{
   handle : handle.value
  });
});

socket.on('message',(data) => {
    feedback.innerHTML = '';
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';

});
 
socket.on('typing', (data)=>{
    feedback.innerHTML = '<p><em>' + data.handle + ' is typing a message...</em></p>';
});