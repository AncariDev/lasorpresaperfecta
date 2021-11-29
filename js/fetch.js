const tabla = document.querySelector('#lista-productos tbody');
const elem = document.getElementById('#imagenProducto tbody');
const namep = document.querySelector('#product-name tbody');

function cargaDesayunos(){
  var prodId = getParameterByName('id'); 
  var prodPos = getParameterByName('pos');
  fetch('products.json')
  .then(respuesta => respuesta.json())  // formato en el que se desea obtener la informacion ${producto.price}
  .then(productos => {
    productos.forEach(producto => {
      let namehtml='';
      if(producto.id==prodId){
        console.log(producto.type)
        const row = document.createElement('tr');
        const row2 = document.createElement('tr');
        const row3 = document.createElement('tr');
        const row4 = document.createElement('tr');
          row.innerHTML +=`<td rowspan="4"> <img src="images/${producto.type}/${producto.image[prodPos]} " style="width: 100%; " /> </td>
                            <td> <h2> ${producto.name} </h2> </td>`; 
          row2.innerHTML +=` <td>Cod: ${producto.id}</td>`;
          row3.innerHTML +=`<td> <span> <span> Contáctanos 322 3765091 </span> </span></td>`;
          row4.innerHTML +=`<td> <p>  <br/>  </p> </td>`;
          tabla.appendChild(row); //¿Qué contiene? ${producto.items}
          tabla.appendChild(row2);
          tabla.appendChild(row3);
          tabla.appendChild(row4);

        
      }
    });
  }) // como se muestra la info
}

//Funcion para trael el id del producto
function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
  results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

cargaDesayunos();
