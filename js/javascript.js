// CONFIGURACIÓN DE FIREBASE

const firebaseConfig = {
  apiKey: "AIzaSyCQg8eV09AUruNSaeQHSPBaHSKKZpmr3Tg",
  authDomain: "snackflix-3b377.firebaseapp.com",
  projectId: "snackflix-3b377",
  storageBucket: "snackflix-3b377.firebasestorage.app",
  messagingSenderId: "214377275883",
  appId: "1:214377275883:web:ef560ac6541cccdc03b9ae"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Referencia a Firestore
const db = firebase.firestore();


// Cargar productos desde FireBase

async function cargarProductosFirebase() {
  try {
    const snapshot = await db.collection("Productos").get(); // <-- CORREGIDO
    const lista = [];

    snapshot.forEach(doc => {
      lista.push({ id: doc.id, ...doc.data() });
    });

    mostrarProductos(lista);

  } catch (error) {
    console.error("Error leyendo productos desde Firebase:", error);
  }
}



// Mostrar productos en HTML
function mostrarProductos(lista) {
  const contenedor = document.getElementById("boxproductos");
  contenedor.innerHTML = "";

  lista.forEach(producto => {
    let div = document.createElement("div");
    div.id = "boxproducto";

    div.innerHTML = `
      <h2 id="nombreproducto">${producto.nombre}</h2>
      <img src="${producto.imagen}">
      <h3 id="precioproducto">$${producto.precio}</h3>
      <button id="btncomprar" onclick="verdetalle('${producto.id}')">Ver</button>
    `;

    contenedor.appendChild(div);
  });
}



// ver detalle del producto
function verdetalle(id) {
  db.collection("Productos") // <-- CORREGIDO
    .doc(id)
    .get()
    .then(doc => {
      if (!doc.exists) return;

      const producto = doc.data();
      producto.id = id;

      localStorage.setItem("detalle", JSON.stringify(producto));

      window.location.href = "detalle.html";
    });
}


cargarProductosFirebase();


function actualizar() {
  let carrito = localStorage.getItem("totalproductos") || 0;
  document.getElementById("totalproducto").innerHTML = carrito;
}

function irAlCarrito() {
    window.location.href = "carrito.html";
}

actualizar();

