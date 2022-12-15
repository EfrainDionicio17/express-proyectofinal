window.onload = init;
var headers = {};
var url = "http://localhost:3000";


function init() {
    headers = {

        headers: {
  
          'Authorization': "bearer " + localStorage.getItem("token")
  
        }
  
      }
    document.querySelector('.btn-primary').addEventListener('click', find);

}




function find() {

    var name = document.getElementById('input-name').value;

    console.log(name);

    axios.get(url + "/empleados/"+name, headers)

        .then(function (res) {

            console.log(res);
            displayEmpleado(res.data.message);

        }).then(function (res) {
            alert("busqueda exitoso");        
        
          }).catch(function (err) {
            alert("busqueda no encontrada");        

            console.log(err);
        })

}

function displayEmpleado(empleado){

    var body = document.querySelector("body");
  
    for(var i =0; i< empleado.length; i++) {
  
      body.innerHTML += `<h3>${empleado[i].nombre}</h3>`;
  
    }
  
}

