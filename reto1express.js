const express = require("express");
const app = express();


app.get("/", function (request,response){
    console.log("Petición recibida por el cliente");
    console.log(request.url);
    console.log(request.method);
    console.log(request.headers["user-agent"]);
    response.send("Recibido!")
});

app.get("/bye", function(request, response){
    console.log("Petición recibida por el cliente");
    console.log(request.method);
    console.log(request.url);
    console.log(request.headers["user-agent"]);
    response.send("Adiós!");
})

app.listen(5000);