const net = require('net');
const port = 3000;

const server = net.createServer();

server.on("connection", socket => {
  console.log("Recibimos nueva conexión ...");

  socket.on("data", data => {
    data = data.toString().trim().toUpperCase();
    if (data === "PING") {
      socket.write(`PONG\n`);
    } else {
      socket.write(`WHAT\n`);
    }
  });
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Servidor TCP corriendo en el puerto ${port} ...`);
});