/*const x = 0; //x es una constante que no se modificará
let y = 0; //y y z si pueden cambiar
var z = ;*/

const express = require('express'); //require es para importar
const app = express();
const { pokemon } = require('./pokedex.json');

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

app.get('/pokemon', (req, res, next) =>{

  //console.log(req.params.name);
  return res.status(200).send(pokemon);

});

app.get('/pokemon/:id([0-9]{1,3})', (req, res, next) =>{

  const id = req.params.id - 1;
  if(id >= 0 && id <= 150){

      return res.status(200).send(pokemon[req.params.id - 1]);

  }

    res.status(404).send("Pokémon no encontrado.");

});

app.get('/pokemon/:name([A-Za-z]+)', (req, res, next) =>{


  /*for (i=0; i<pokemon.length; i++){
    if(pokemon[i].name.toUpperCase() == name.toUpperCase()){

      return res.status(200).send(pokemon[i]);

    };

  };*/

  //Operador ternario if = condicion ? valor si verdadero : valor si falso

  const name = req.params.name;

  const pk = pokemon.filter((p) => {

    return (p.name.toUpperCase() == name.toUpperCase()) ? p : null;

  });

  return (pk.length>0) ? res.status(200).send(pk) : res.status(404).send('Pokémon no encontrado');


});

app.listen(process.env.PORT || 3000, ()=>{

  console.log("Server is running...");

});
