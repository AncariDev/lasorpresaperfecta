const tabla = document.querySelector('#lista-productos tbody');
const elem = document.getElementById('#imagenProducto tbody');
const namep = document.querySelector('#product-name tbody');

function cargaDesayunos(){
  var prodId = getParameterByName('id'); 
  var prodPos = getParameterByName('pos');
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
          row5.innerHTML +=`<td> <img src="images/product-details/${producto.image[prodPos]} " alt="" /> </td>`; 
          row.innerHTML +=` <td> <h2> ${producto.name} </h2> </td>`;
          row2.innerHTML +=` <td>Cod: ${producto.id}</td>`;
          row3.innerHTML +=`<td> <span> <span> ${producto.price} </span> </span></td>`;
          row4.innerHTML +=`<td> <p> ¿Qué contiene? <br/> ${producto.items} </p> </td>`;
          tabla.appendChild(row5);

          if(producto.image.length==2){
            const row6 = document.createElement('tr');
            row6.innerHTML +=`<td>
            <div id="similar-product" class="carousel slide" data-ride="carousel">
                <!-- Wrapper for slides -->
                  <div class="carousel-inner">
                  <div class="item active">
                    <a href="product-details.html?producto='desayuno'&id=${producto.id}&pos=0"><img src="images/product-details/mini/${producto.image[0]}" alt=""></a>
                    <a href="product-details.html?producto='desayuno'&id=${producto.id}&pos=1"><img src="images/product-details/mini/${producto.image[1]}" alt=""></a>
                  </div>
                </div>
                <!-- Controls -->
                <a class="left item-control" href="#similar-product" data-slide="prev">
                <i class="fa fa-angle-left"></i>
                </a>
                <a class="right item-control" href="#similar-product" data-slide="next">
                <i class="fa fa-angle-right"></i>
                </a>
            </div>
            </td>`;

            tabla.appendChild(row6);
          }
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
