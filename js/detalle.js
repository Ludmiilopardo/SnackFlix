let productoseleccionado = JSON.parse( localStorage.getItem("detalle"))
let contador = 0;

function cargarproducto() {
        let parrafo = document.createElement("div")
        parrafo.id = "boxproducto"
        parrafo.innerHTML = `<div class="productodetalle"> 
                <div class="info">
                    <h2 id="nombreproducto">${productoseleccionado.nombre}</h2>
                    <h3 id="precioproducto">$ ${productoseleccionado.precio}</h3>
                    <h6 id="descripcionTitulo">Descripcion del producto:</h6>
                    <p id="descripcionproducto">${productoseleccionado.descripcion}</p>
                    <p id="stockproducto">Stock: ${productoseleccionado.stock}</p>
                    <div class="boxcontador">
                        <button id="sumarproducto" onclick="sumarproducto()">+</button>
                        <p id="pcontador">0</p>
                        <button id="restarproducto" onclick="restarproducto()">-</button>
                    </div>
                        <button id="agregarproducto" onclick="agregarcarrito()">Agregar Carrito</button>
                </div>
                <div class="imagen">
                    <img src="${productoseleccionado.imagen}" alt="" id="imagenproducto">
                </div>
        </div>
        `
        document.getElementById("boxproductos").appendChild(parrafo)
}

cargarproducto()

function sumarproducto() {
    if (contador < productoseleccionado.stock){
        contador = contador + 1
        document.getElementById("pcontador").innerHTML = contador
    }else{
        alert("Stock máximo alcanzado.")
    }
    
}

function restarproducto() {
    if (contador > 0){
        contador = contador - 1
        document.getElementById("pcontador").innerHTML = contador
    }
}

function agregarcarrito() {
    if (contador > 0) {
        let carrito = JSON.parse(localStorage.getItem("carrito"))
        if (carrito === null) {
            carrito =[]
        }
        productonuevo = {
            id: productoseleccionado.id,
            nombre:productoseleccionado.nombre,
            imagen: productoseleccionado.imagen,
            cantidad: contador,
            precio: productoseleccionado.precio
        }
        carrito.push(productonuevo)

        let productojson = JSON.stringify(carrito)
        localStorage.setItem("carrito", productojson)
        window.location.href = "carrito.html"
    }else{
        alert("Indicar la cantidad de productos a comprar.")
    }
    
}

function actualizar(){
  let carrito = localStorage.getItem("totalproductos")
    document.getElementById("totalproducto").innerHTML = carrito

}
actualizar()
