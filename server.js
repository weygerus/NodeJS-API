const express = require("express");       // chamada do express(Server)
const app     = express();                // instanciação do servidor
const data    = require("./data.json")    // chamada dos dados


app.listen(3000, function(){           // Início do servidor
    console.log("servidor ativo")  
});
app.use(express.json());               // indicação de que o express usará a notação json


// Requisições
app.get("/clientes", function(req, res) {
    res.json(data);
});

app.get("/clientes/:id", function(req, res) {
    const { id } = req.params;
    const cliente = data.find(cli => cli.id == id);
    
    if(cliente){
        res.json(cliente);
    }
    else{
        return res.status(204).json();
    }
});

/* 
 :id - parametro para receber cliente especifico
 req - request  (requisição)
 res - response (resposta)
*/

app.post("/clientes", function(req, res){});
app.put("/clientes", function(req, res){});
app.delete("/clientes", function(req, res){});





/*
INFORMAÇÕES IMPORTANTES:

Resources - são entidades(recursos) ou objetos
que possuem dados associados a eles.

Verbos HTTP:
  GET    : Receber dados de um resource
  POST   : Enviar dados a serem processadores por um resource
  PUT    : Atualizar dados de um resource
  DELETE : Deletar dados de um resource

  http://localhost:3000/clientes

  localhost:3000/clientes - URI (forma de alcançar o resource)
  clientes - endpoint (nome do resource)
*/