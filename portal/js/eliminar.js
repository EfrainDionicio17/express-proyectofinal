window.onload = init;
var headers = {};
var url = "http://localhost:3000";
// eliminar

function init() {
    headers = {

        headers: {
  
          'Authorization': "bearer " + localStorage.getItem("token")
  
        }
  
      }
    document.querySelector('.btn-primary').addEventListener('click', eliminar);

}




function eliminar() {

    var id = document.getElementById('input-id').value;

    console.log(id);

    axios.delete(url + "/empleados/"+id, headers)

        .then(function (res) {

            console.log(res);

        }).then(function (res) {
            alert("eliminar exitoso");        
        
          }).catch(function (err) {
            alert("eliminar no encontrada");        

            console.log(err);
        })

}


