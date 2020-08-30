const tabla = document.querySelector('#lista-productos tbody');
const elem = document.getElementById('#imagenProducto tbody');
const namep = document.querySelector('#product-name tbody');

function cargaDesayunos(){
  var prodId = getParameterByName('id');
  fetch('products.json')
  .then(respuesta => respuesta.json())  // formato en el que se desea obtener la informacion
  .then(productos => {
    productos.forEach(producto => {
      let namehtml='';
      if(producto.id==prodId){
        const row = document.createElement('tr');
        const row2 = document.createElement('tr');
        const row3 = document.createElement('tr');
        const row4 = document.createElement('tr');
        const row5 = document.createElement('tr');
          row5.innerHTML +=`<td> <img src="images/product-details/${producto.image} " alt="" /> </td>`; 
          row.innerHTML +=` <td> <h2> ${producto.name} </h2> </td>`;
          row2.innerHTML +=` <td>Cod: ${producto.id}</td>`;
          row3.innerHTML +=`<td> <span> <span> ${producto.price} </span> </span></td>`;
          row4.innerHTML +=`<td> <p> ¿Qué contiene? <br/> ${producto.items} </p> </td>`;
          tabla.appendChild(row5);
          tabla.appendChild(row);
          tabla.appendChild(row2);
          tabla.appendChild(row3);
          tabla.appendChild(row4);

      }else{
        console.log("Producto no encontrado")
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
