const express = require('express')
const app = express()
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('public'))

io.on("connection", function (socket) {
    console.log("Client connected");
    socket.on('UserInput', function (msg) {
        handleMessage(msg, socket.id)
    })
})

function handleMessage(msg, socketId) {
    console.log("Handle Message")
    msg = msg * 2
    io.to(socketId).emit('NodeAnswer', 'Here is the node server speaking: ' + msg)
}

// http://127.0.0.1/
//app.get('/', (req, res) => {
//    res.send("Hello world");
//})

http.listen(3000, () => console.log("Example app running"))
