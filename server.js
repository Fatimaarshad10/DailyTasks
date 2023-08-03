const express = require("express")
// create an app 
const app = express()
// http and server 
const http = require('http').Server(app);
// socket io require 
const socketIO = require('socket.io')(http);

// create a map to set the socket id and the client_no & name 
// global.Users = new Map()
// socketIO.on ('connection', (socket )=>{
//     console.log('socket is connected')
//     socket.on ('client', function(data){
//         Users.set(data.name , socket.id)
//         console.log(Users)
//     })
//     socket.on('sent', function(data){
//                 const value = Users.get(`${data.name}`)
//                 console.log(value)
//                 // console.log('Users_name ',Users_name)
        
//                 // socket.to(Users_name).emit('receive',data.message)
//         	})
//     socket.on('disconnect' ,function(){
//         console.log('Disconnected')
//     })
// })
// var user = 0 
// socketIO.on('connection', (socket) => {
//         console.log('Connected------->');
//         user++;
//         socketIO.socket.emit('broadcast',{})
//     	socket.on('disconnect', function(){
//     		console.log('Disconnected');
//     	})
//     })
    
    


global.users = new Map()

// Socket.io connection event
socketIO.on('connection', (socket) => {
    // console.log('Connected------->',socket.id);

    socket.on('createId', function(data){
        users.set(data.userId, socket.id )
        console.log(users)
	})

    socket.on('send', function(data){
        const socketId = users.get(`${data.userId}`)
        console.log('SocketId: ',socketId)

        // socket.to(socketId).emit('receive',data.msg)
        socket.broadcast.emit('receive', data.msg);
	})

	socket.on('disconnect', function(msg){
		console.log('Disconnected');
	})
})



// listen on 4000 port no 
const port = 4000;
http.listen(port,()=>{
    console.log(`listening ${port}`)
})