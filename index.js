var PORT = process.env.PORT || 3000;
const io = require("socket.io")(PORT);
console.log("Server is running on " + PORT + "port");
// Players array
let users = [];
let Players;

io.on('connection', socket=>{
    console.log("received a new connection");
  socket.on('user_join',name=>{
    Players = { 
      Id : socket.id,
      Name : name
            };
    users.push(Players);
    console.log(users);
  socket.emit('players',users);
  });
  
  socket.on('disconnect',()=>{
   // if (users.pop()) {
    console.log("user disconnect");
  // / }
   
  });
});/*

setInterval(function() {
    console.log(users.length);
  },5000);*/