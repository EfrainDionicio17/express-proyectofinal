const express = require('express');
const pokemon = express.Router();
const db = require('../config/database');

pokemon.post("/", (req,res,next)=>{

  return res.status(200).send(req.body);

});

pokemon.get('/', async (req, res, next) =>{

  const pkmn = await db.query("SELECT * FROM pokemon");
  console.log(pkmn);
  return res.status(200).json(pkmn);

});

pokemon.get('/:id([0-9]{1,3})', async (req, res, next) =>{

  const id = req.params.id;

  if(id >= 0 && id <= 723){

      const pkmn = await db.query("SELECT * FROM pokemon WHERE pok_id = "+id);
      console.log(pkmn);
      return res.status(200).json(pkmn);

  }

    return res.status(404).send("Pokémon no encontrado.");

});

pokemon.get('/:name([A-Za-z]+)', async (req, res, next) =>{

  /*for (i=0; i<pokemon.length; i++){
    if(pokemon[i].name.toUpperCase() == name.toUpperCase()){

      return res.status(200).send(pokemon[i]);

    };

  };

  //Operador ternario if = condicion ? valor si verdadero : valor si falso

  const pkmn = pk.filter((p) => {

    return (p.name.toUpperCase() == name.toUpperCase()) && p;

  });

  return (pkmn.length>0) ? res.status(200).send(pkmn) : res.status(404).send('Pokémon no encontrado');*/

  const name = req.params.name;
  const pkmn_name = await db.query("SELECT * FROM pokemon WHERE pok_name = '"+name+"'");

  console.log(pkmn_name);

  if(pkmn_name.length>0) {

    return res.status(200).json(pkmn_name);

  };

  return res.status(404).send("Pokémon no encontrado.");


});

module.exports = pokemon;
