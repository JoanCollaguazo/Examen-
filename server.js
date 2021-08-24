const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const Users = require('./api/users');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/api/users', Users);

app.get("/",(req, res)=>{
    //res.send("hola mundo!");
    res.sendFile(path.join(__dirname+"/index.html"));

});


//declaracion - CONEXION CON BD
mongoose.connect(
    "mongodb://localhost/usuarios",
    {useNewUrlParser: true},
    (err, res)=>{
        err && console.log('Error conectando a la base de datos');
        app.listen(4000,()=>{
            console.log('Servidor corriendo en localhost: 4000');
        })
    }
)