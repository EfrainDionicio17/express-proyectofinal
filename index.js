/*const x = 0; //x es una constante que no se modificará
let y = 0; //y y z si pueden cambiar
var z = ;*/

const express = require('express'); //require es para importar
const app = express();
const { pokemon } = require('./pokedex.json');

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

  //const pokemon = pokedex.pokemon;
  res.status(200); //
  res.send("Bienvenido al Pokedex");

});

app.get('/pokemon/all', (req, res, next) =>{

  //console.log(req.params.name);
  res.status(200);
  res.send(pokemon);

});

app.get('/pokemon/:id([0-9]{1,3})', (req, res, next) =>{

  const id = req.params.id - 1;
  if(id >= 0 && id <= 150){

      res.status(200);
      return res.send(pokemon[req.params.id - 1]);

  }

    res.status(404);
    res.send("Pokémon no encontrado.")

});

app.get('/pokemon/:name', (req, res, next) =>{
  const name = req.params.name;
for (i=0; i<pokemon.length; i++){
  if(pokemon[i].name==name){

    res.status(200);
    res.send(pokemon[i]);

  };

};

    res.status(404);
    res.send("Pokémon no encontrado.")

});

app.listen(process.env.PORT || 3000, ()=>{

  console.log("Server is running...");

});
