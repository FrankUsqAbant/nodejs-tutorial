const http = require("http");
const express = require("express");
const app = express();

const server = http.createServer(app);

//Configuracion del servidor
app.set("port", 3000);

app.use(express.static(__dirname + "/public"));

//Inicializacion del servidor
server.listen(3000, function () {
  console.log("el servidor iniciado");
});

//Este es la logica de los cockets
require("./sockets")(server);
