let productoseleccionados = JSON.parse(localStorage.getItem("carrito")) || [];

// Redondeo seguro
const round = (n) => Math.round((n + Number.EPSILON) * 100) / 100;

function cargarcarrito() {
    const lista = document.getElementById("listadeproductos");
    let totalfinal = 0;
    let totalproductos = 0;

    lista.innerHTML = "";

    if (productoseleccionados.length === 0) {
        lista.innerHTML = `
            <tr><td colspan="6" style="text-align:center;padding:1rem">
                No hay productos en el carrito.
            </td></tr>`;
        document.getElementById("totalgasto").innerHTML = "$0.00";
        document.getElementById("totalproducto").innerHTML = "0";
        return;
    }

    productoseleccionados.forEach((p, i) => {
        const precio = Number(p.precio);
        const cantidad = Number(p.cantidad);
        const subtotal = round(precio * cantidad);

        totalfinal += subtotal;
        totalproductos += cantidad;

        lista.innerHTML += `
    <tr>
        <td><img src="${p.imagen}" width="50"></td>
        <td>${cantidad}</td>
        <td>${p.nombre}</td>
        <td>$${precio.toFixed(3)}</td>
        <td>$${subtotal.toFixed(3)}</td>
        <td><button onclick="eliminarProducto(${i})">X</button></td>
    </tr>
`;
    });

   document.getElementById("totalgasto").innerHTML = `$${totalfinal.toFixed(3)}`;
    document.getElementById("totalproducto").innerHTML = totalproductos;
    localStorage.setItem("totalproductos", totalproductos);
}

function eliminarProducto(indice) {
    productoseleccionados.splice(indice, 1);
    localStorage.setItem("carrito", JSON.stringify(productoseleccionados));
    cargarcarrito();
}

document.addEventListener("DOMContentLoaded", cargarcarrito);

function finalizarCompra() {
    if (productoseleccionados.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }

    // Crear modal desde JS
    const modal = document.createElement("div");
    modal.className = "modal-exito";
    modal.innerHTML = `
        <div class="modal-exito-content">
            <h2>¡Compra realizada!</h2>
            <p>Tu pedido está en preparación 💙</p>
            <p>No te pierdas nuestras próximas novedades y promociones ✨</p>

            <button id="cerrarModalExito">Aceptar</button>
        </div>
    `;
    document.body.appendChild(modal);

    // Cerrar modal al tocar el botón
    document.getElementById("cerrarModalExito").onclick = () => {
        modal.remove();
    };

    // Vaciar carrito
    productoseleccionados = [];
    localStorage.removeItem("carrito");
    localStorage.setItem("totalproductos", 0);

    // Actualizar interfaz
    cargarcarrito();
    actualizarBadge();
}
