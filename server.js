// chamada do express
const express = require("express");

// instanciação
const app = express();

// Início do servidor
app.listen(3000, function(){
    console.log("servidor ativo")
});
