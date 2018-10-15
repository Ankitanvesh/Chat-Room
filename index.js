var express = require('express');
var app=express();
var socket = require('socket.io');
 
var server = app.listen(3000 ,() => {
 console.log('Listening on port 3000');    
});


app.use(express.static('public'));
 
var io= socket(server);

io.on('connection' ,(socket)=>{
 console.log('Socket connection established',socket.id);
  
 socket.on('message',(data)=>{
    io.sockets.emit('message', data);
 });

 socket.on('typing',(data)=>{
  socket.broadcast.emit('typing',data);
  
 });

});
//CHeck error online no 14.
