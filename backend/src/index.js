const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://pato:21111999El@cluster0.fn1oo.mongodb.net/test' , {
    UseNewUrlParser:true,
    UseUnifiedTopology:true
})

app.use(express.json());
app.use(routes);
// Query Params: request.query(Filtros, ordenação, paginação)
//Route Params : request.params(identificar um recurso na alteração ou remoção)
//Body: request.body(Dados para criação ou alteração de um registro)
//MongoDB Banco de dados não-relacional


app.listen(3333);