module.exports = (req, res, next) =>{

  //req es la petición del navegador
  //res respuesta clase objeto a la petición

  //const pokemon = pokedex.pokemon;
  res.status(200).json({code: 1, message: "Bienvenido al Portal"});

};
