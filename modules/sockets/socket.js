global.Students= new Map();
// ------------- SOCKET IO --------------------
module.exports.server= async (io) => {
  io.on("connection", (socket) => {
    socket.on("test", (data) => {
        // console.log(socket.id)
        console.log(data.msg)
    //   io.emit("test", msg);
    });

    socket.on("disconnect", async () => {
      console.log("User disconnected", socket.id);
    });
  });
};
