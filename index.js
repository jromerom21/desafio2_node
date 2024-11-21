
//Librerias base
const express = require('express')
const fs = require('fs')
const cors = require('cors')

//Llamada de funciones requeridas
const {callback, callback2, callback3, callback4, callback5} = require('./controllers/callback')

const app = express()
const PORT = 3003;

app.listen(PORT, ()=> {
    console.log(`Servidor encendido! en el puerto http://localhost:${PORT}`)
}
);

//Integremos un middleware
app.use(express.json())
app.use(cors())

//Rutas Back
app.get("/", callback);
app.get("/canciones", callback2);
app.post("/canciones", callback3);
app.put("/canciones/:id", callback4);
app.delete("/canciones/:id", callback5);
