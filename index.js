
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
//  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('user connected');
  socket.on('collabwb msg', function(msg){
    console.log('msg',msg);
    socket.broadcast.emit ('collabwb msg', msg)
  });
});

http.listen(3333, function(){
  console.log('listening on *:3333');
}); 

