const express = require('express');
const empleados = express.Router();
const db = require('../config/database');

empleados.post("/", async (req,res,next)=>{

  const {nombre, apellidos, telefono, correo, direccion} = req.body;

  if(nombre && apellidos && telefono && correo && direccion){

    let query = "INSERT INTO lista(nombre, apellidos, telefono, correo, direccion)";
    query += ` VALUES('${nombre}','${apellidos}', '${telefono}', '${correo}', '${direccion}')`;

    const rows = await db.query(query);

    console.log(rows);

    if (rows.affectedRows == 1) {

        return res.status(201).json({code:201, message: "Empleado insertado correctamente."});

    };

    return res.status(500).json({code:500, message: "Ocurrió un error."});


  };

  return res.status(500).json({code:500, message: "Campos incompletos, revise de favor."});


});

empleados.delete("/:id([0-9]{1,3})", async (req, res, next) => {

  const query = `DELETE FROM lista WHERE id_empleado=${req.params.id}`;

  const rows = await db.query(query);

  if (rows.affectedRows == 1) {

    return res.status(200).json({ code: 200, message: "Empleado borrado correctamente."});

  }

  return res.status(404).json({ code: 404, message: "Empleado no encontrado."});

});

empleados.put("/:id([0-9]{1,3})", async (req, res, next) => {

    const {nombre, apellidos, telefono, correo, direccion} = req.body;

    if(nombre && apellidos && telefono && correo && direccion){

      let query = `UPDATE lista SET nombre='${nombre}', apellidos='${apellidos}',`;
      query += `telefono='${telefono}',correo='${correo}', direccion='${direccion}' WHERE id_empleado=${req.params.id};`;

      const rows = await db.query(query);

      console.log(rows);

      if (rows.affectedRows == 1) {

          return res.status(200).json({code:200, message: "Empleado actualizado correctamente."});

      };

      return res.status(500).json({code:500, message: "Ocurrió un error."});


    };

    return res.status(500).json({code:500, message: "Campos incompletos, revise de favor."});


});

empleados.patch("/:id([0-9]{1,3})", async (req, res, next) => {

  if(req.body.nombre){

  let query = `UPDATE lista SET nombre='${req.body.nombre}' WHERE id_empleado=${req.params.id};`;

  const rows = await db.query(query);

  console.log(rows);

  if (rows.affectedRows == 1) {

      return res.status(200).json({code:200, message: "Empleado actualizado correctamente."});

  };

  return res.status(500).json({code: 500, message: "Ocurrió un error."});
};

return res.status(500).json({code: 500, message: "Campos incompletos."});

});

empleados.get('/', async (req, res, next) =>{

  const emp = await db.query("SELECT * FROM lista");
  console.log(emp);
  return res.status(201).json({code:201, message: emp});

});

empleados.get('/:id([0-9]{1,3})', async (req, res, next) =>{

  const id = req.params.id;

  if(id >= 1 && id <= 6){

      const emp = await db.query("SELECT * FROM lista WHERE id_empleado = "+id+";");
      console.log(emp);
      return res.status(201).json({code:201, message: emp});

  }

    return res.status(404).send({code: 404, message: "Empleado no encontrado."});

});

empleados.get('/:name([A-Za-z]+)', async (req, res, next) =>{

  const name = req.params.name;
  const emp_name = await db.query("SELECT * FROM lista WHERE nombre = '"+name+"';");

  console.log(emp_name);

  if(emp_name.length>0) {

    return res.status(201).json({ code:200, message: emp_name});

  };

  return res.status(404).send({code: 404, message: "Empleado no encontrado."});


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



});

module.exports = empleados;
