const net = require('net');
const port = 3000;

const server = net.createServer();

server.on("connection", socket => {
  console.log("Recibimos nueva conexión ...");

  socket.on("data", data => {
    const lines = data.toString().split("\n");
    const [verb, resource, version] = lines[0].split(" ");

    console.log(`verb....: ${verb}`);
    console.log(`resource: ${resource}`);
    console.log(`version.: ${version}`);
    
    if (version.trim() !== "HTTP/1.1") {
      socket.write(`HTTP/1.1 400 Bad Request\n\n<h1>Mensaje no entendido</h1>`);
    } else {
      socket.write(`HTTP/1.1 200 OK\n\n<h1>Hola Mundo</h1>`);
    }

    socket.destroy();
  });
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Servidor TCP corriendo en el puerto ${port} ...`);
});