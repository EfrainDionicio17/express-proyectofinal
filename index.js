/*const x = 0; //x es una constante que no se modificará
let y = 0; //y y z si pueden cambiar
var z = ;*/

//Dependencies
const bodyParser = require('body-parser');
const express = require('express'); //require es para importar
const morgan = require('morgan');
const app = express();

//Router
const empleados = require('./routes/empleados');
const user = require('./routes/user');

//Middleware
const auth = require('./middleware/auth');
const notfound = require('./middleware/notfound');
const index = require('./middleware/index');
const cors = require('./middleware/cors');

app.use(cors);

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended:true }));


/*
Verbos HTTP: denotan una acción
GET: Para obtener un recurso
POST: Guardar/almacencar/guardar un recurso
PATCH: Actualizar un dato de un recurso (registro: cualquier registro en una base de datos), modificar una parte de un recurso.
PUT: Actualizar todos los datos,
DElETE: Eliminar un recurso o registro
*/

app.get("/", index);

app.use("/user", user);

app.use(auth);

app.use("/empleados", empleados);

app.use(notfound);

app.listen(process.env.PORT || 3000, ()=>{

  console.log("Server is running...");

});
