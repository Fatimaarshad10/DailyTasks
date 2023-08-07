global.users = new Map();

global.receiver = new Map();

module.exports.server = async (io) => {
  io.on('connection', (socket) => {
    socket.on('createId', function (data) {
      if (!data.userId || !data.msg) {
        console.log('Invalid user data.');
        return;
      }

      if (!users.has(data.userId)) {
        users.set(data.userId, {
          socketIds: socket.id,
          msg: [data.msg],
        });
      } else {
        const userData = users.get(data.userId);
        userData.msg.push(data.msg) 
      }
      console.log(users);
    });


    socket.on('data', function (data) {
      // const admin =  users.get(data.userId);
      
      const data1 = receiver.set(data.userId, (receiver.get(data.userId) || []).concat(data.msg));
      socket.to(data1.socketIds).emit('receive', data1.msg);
  
      // const data1 = receiver.get(data.userId);
      console.log(data1);

   
    });
    socket.on('disconnect', function (msg) {
      console.log('Disconnected');

    });
  });
};

// socket.broadcast.emit('receive', data.msg);
