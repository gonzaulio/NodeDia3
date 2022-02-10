const { access } = require('fs');
const http = require('http');

let mensaje1 = {ok: true, message: "Recibido!"}
let mensaje2 = {ok: true, message: "Adiós!"}


const server = http.createServer(function (request, response) {
    console.log("Petición recibida por el cliente");
    console.log("URL de petición: " + request.url);
    console.log("Método de petición: " + request.method);
    
    console.log(request.headers["content-type"]);
    console.log(request.headers["content-length"]);
    console.log(request.headers["user-agent"]);
    // console.log(request.headers);
    
    response.writeHead(200, {"Content-Type": "text/plain"});
    if (request.url == "/bye") {
        response.write(JSON.stringify(mensaje2));
    } else {
        response.write(JSON.stringify(mensaje1));
    }
    
    
    response.end();
});

server.listen(3000);

