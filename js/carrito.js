let productoseleccionados = JSON.parse( localStorage.getItem("carrito"))
let totalfinal = 0;
let totalproductos = 0;
function cargarcarrito() {
    for (let productoseleccionado of productoseleccionados) {
        let total = productoseleccionado.precio*productoseleccionado.cantidad
        totalfinal = totalfinal + total
        totalproductos = totalproductos + parseInt(productoseleccionado.cantidad)
        let fila = document.createElement("tr")
        fila.innerHTML = `
                        <td><img src="${productoseleccionado.imagen}" width="50"></td>
                        <td>${productoseleccionado.cantidad}</td>
                        <td>${productoseleccionado.nombre}</td>
                        <td>${productoseleccionado.precio}</td>
                        <td>${total}</td>
                        <td><button>X</button></td>
        `
        document.getElementById("listadeproductos").appendChild(fila)
    }
    document.getElementById("totalgasto").innerHTML = totalfinal
    document.getElementById("totalproducto").innerHTML = totalproductos
    localStorage.setItem("totalproductos", totalproductos)
    
}

cargarcarrito()
