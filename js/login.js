function enviarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("mensaje").value;

    if (nombre === "" || email === "" || mensaje === "") {
        alert("Por favor, completá todos los campos.");
    } else {
        alert("¡Gracias por contactarte, " + nombre + "! Tu mensaje fue enviado con éxito.");
        document.getElementById("formContacto").reset();
    }
}
