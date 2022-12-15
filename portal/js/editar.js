window.onload = init;
var headers = {};
var url = "http://localhost:3000";


function init() {
    headers = {

        headers: {

            'Authorization': "bearer " + localStorage.getItem("token")

        }

    }
    document.querySelector('.btn-primary').addEventListener('click', editar);

}


function editar() {

    var id = document.getElementById('input-id').value;
    var name = document.getElementById('input-name').value;
    var lastname = document.getElementById('input-lastname').value;
    var cel = document.getElementById('input-cel').value;
    var mail = document.getElementById('input-mail').value;
    var direccion = document.getElementById('input-direccion').value;

    console.log(name);
    axios({
        method: 'put',
        url: 'http://localhost:3000/empleados/'+id,
        headers:{'Authorization': "bearer " + localStorage.getItem("token")},
        data: {
            user_id: id, 
            nombre: name, 
            telefono: cel, 
            apellidos: lastname, 
            correo: mail, 
            direccion:direccion
    
        }
    
      }).then(function (res) {

            console.log(res);

        }).then(function (res) {
            alert("busqueda exitoso");

        }).catch(function (err) {
            alert("busqueda no encontrada");

            console.log(err);
        })

}

