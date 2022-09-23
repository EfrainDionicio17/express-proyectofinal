/*const x = 0; //x es una constante que no se modificará
let y = 0; //y y z si pueden cambiar
var z = ;*/

const express = require('express'); //require es para importar
const app = express();

/*
Verbos HTTP: denotan una acción
GET: Para obtener un recurso
POST: Guardar datos
PATCH: Actualizar un dato de un recurso (registro: cualquier registro en una base de datos)
PUT: Actualizar todos los datos
DElETE: Eliminar un recurso o registro
*/

app.get("/", (req, res, next) =>{

  //req es la petición del navegador
  //res respuesta clase objeto a la petición

  res.status(200); //
  res.send("Hola mundo.");

});

app.listen(3000, ()=>{

  console.log("Server is running...");

});
