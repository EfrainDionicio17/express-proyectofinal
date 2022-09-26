/*const x = 0; //x es una constante que no se modificará
let y = 0; //y y z si pueden cambiar
var z = ;*/

const bodyParser = require('body-parser');
const express = require('express'); //require es para importar
const morgan = require('morgan');
const app = express();
const pokemon = require('./routes/pokemon');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.use("/pokemon", pokemon);

/*
Verbos HTTP: denotan una acción
GET: Para obtener un recurso
POST: Guardar/almacencar/guardar un recurso
PATCH: Actualizar un dato de un recurso (registro: cualquier registro en una base de datos), modificar una parte de un recurso.
PUT: Actualizar todos los datos,
DElETE: Eliminar un recurso o registro
*/

app.get("/", (req, res, next) =>{

  //req es la petición del navegador
  //res respuesta clase objeto a la petición

  //const pokemon = pokedex.pokemon;
  res.status(200).send("Bienvenido al Pokedex");

});



app.listen(process.env.PORT || 3000, ()=>{

  console.log("Server is running...");

});
