async function subirProductos() {
  try {
    const coleccionRef = collection(db, "productos"); // nombre de la colección
    for (const producto of productos) {
      await addDoc(coleccionRef, producto);
      console.log(`Producto ${producto.nombre} agregado con éxito.`);
    }
  } catch (error) {
    console.error("Error al subir productos:", error);
  }
}

// Ejecutar la carga
subirProductos();

const productos = [
  {
    id: 1,
    nombre:  " Sartenes",
    imagen: "../img/cacerolaMickeey.jpg",
    descripcion: "Cacerola esmaltada Mickey Cookware de Disney. Ideal para todo tipo de preparaciones, combina practicidad y diseño encantador para que cocinar sea aún más placentero.",
    stock: 20,
    precio: 146.382
  },
  {
    id: 2,
    nombre: "Porta Utensilios",
    imagen: "../img/porteutensilios.jpg",
    descripcion: "Porta utensilios de cerámica con diseño de Mickey Cocinero. Elegante y funcional, Mide 15 cm de alto y 11 cm de diámetro. Perfecto para mantener tus herramientas de cocina siempre a mano.",
    stock: 30,
    precio: 22.856
  },
  {
    id: 3,
    nombre: "Organizador de tapa y platos.",
    imagen: "../img/organizador.jpg",
    descripcion: " Descubre el Organizador con base inspirada en los icónicos pies de Mickey Mouse. Aporta estilo y orden a tu cocina con un toque de magia Disney.",
    stock: 15,
    precio: 9.602
  },
  {
    id: 4,
    nombre: "Taza de cerámica oficial.",
    imagen: "../img/tazaceramica.jpg",
    descripcion: "Con la taza de Mickey y sus amigos, experimentarás el verdadero placer de disfrutar de un delicioso desayuno o una merienda. La base es plana y resistente al desgaste. ",
    stock: 10,
    precio: 16.325
  },
  {
    id: 5,
    nombre: "Bowl Mickey Mouse",
    imagen: "../img/bowlmickey.jpg",
    descripcion: "Bowl decorado con la figura de Mickey. Perfecto para servir cereales, postres o snacks con un toque divertido.",
    stock: 25,
    precio: 18.458
  },
  {
    id: 6,
    nombre: "Espátula de silicona de Minnie Mouse",
    imagen: "../img/espatulaminnie.jpg",
    descripcion: "Espátula con mango de madera y diseño clásico de Minnie. Mide 12 pulgadas, ideal para mezclar y hornear con estilo.",
    stock: 12,
    precio: 9.875
  },
  {
    id: 7,
    nombre: "Manoplas de horno de Disney",
    imagen: "../img/manoplas.jpg",
    descripcion: "Guantes resistentes al calor con siluetas de personajes Disney. Protegé tus manos con un diseño único y funcional.",
    stock: 40,
    precio: 24.074
  },
  {
    id: 8,
    nombre: " Tabla de cortar.",
    imagen: "../img/tabla.jpg",
    descripcion:"Tabla de madera resistente, perfecta para preparar alimentos o usar como bandeja decorativa en tu cocina Disney.",
    stock: 28,
    precio: 56.188
  },
  {
    id: 9,
    nombre: "Tostadora Mickey Mouse Atma",
    imagen: "../img/Tostadora.jpeg",
    descripcion: "Llevá la magia de Disney a tus mañanas con la Tostadora Atma Disney Mickey Negra, donde el estilo y la funcionalidad se unen para hacer de cada desayuno un momento especial..",
    stock: 8,
    precio: 45.685
  },
  {
    id: 10,
    nombre: "Taza Chip – La Bella y la Bestia",
    imagen: "../img/Tazachip.jpeg",
    descripcion: "Taza inspirada en Chip, el encantador personaje de La Bella y la Bestia. Fabricada en cerámica de alta calidad con licencia oficial Disney.",
    stock: 16,
    precio: 31.174
  },
  {
    id: 11,
    nombre: "Set de Repasadores Mickey & Minnie",
    imagen: "../img/Repasadores.jpeg",
    descripcion: "Set de repasadores Mickey & Minnie, Contiene 2 repasadores. Medidas: Largo 60cm Ancho 38cm 100% Algodón. Las imágenes son de carácter ilustrativo Licencia Oficial Disney",
    stock: 14,
    precio: 11.259
  },
  {
    id: 12,
    nombre: "Soporte para utensilios-Disney Stitch",
    imagen: "../img/Utensiliosstich.jpeg",
    descripcion: "Organizador de cocina de 6.5 pulgadas con diseño de Stitch. Ideal para mantener tus utensilios ordenados con un toque adorable.",
    stock: 18,
    precio: 20.154
  },
  {
    id: 13,
    nombre: "Set de Cremera y azucarera",
    imagen: "../img/Cremera.jpeg",
    descripcion: "Elegante set de cremera y azucarera de porcelana gris con detalles dorados. Ideal para completar tu mesa con estilo Disney.",
    stock: 20,
    precio: 25.249
  },
  {
    id: 14,
    nombre: "Botella Termica DISNEY 600ml Alicia",
    imagen: "../img/BotellaDis.jpeg",
    descripcion: "Botella térmica inspirada en Alicia en el País de las Maravillas. Mantiene tus bebidas frías o calientes por horas, con diseño encantador.",
    stock: 6,
    precio: 21.512
  },
  {
    id: 15,
    nombre: "Taza de cerámica esculpida en 3D de Disney Cinderella",
    imagen: "../img/TazaCeni.jpeg",
    descripcion: "Taza de cerámica esculpida en 3D inspirada en Cenicienta, está diseñada para soportar la maldad de cualquier hermanastra engañadora.",
    stock: 9,
    precio: 28.325
  },
  {
    id: 16,
    nombre: "Tarro de miel esculpido de Winnie the Pooh",
    imagen: "../img/Hunny.jpeg",
    descripcion: "Taza de cerámica con diseño esculpido de Winnie the Pooh sobre su clásico tarro de miel. Dulzura y ternura en cada sorbo.",
    precio: 25.245
  },
  {
    id: 17,
    nombre: "Tetera + taza Mad Tea Party",
    imagen: "../img/Tetera.jpeg",
    descripcion: "Set de tetera y taza inspirado en el icónico Mad Tea Party de Alicia en el País de las Maravillas. Perfecto para los amantes del té y la magia Disney.",
    stock: 17,
    precio: 59.362
  },
  {
    id: 18,
    nombre: "Posavasos Daisy",
    imagen: "../img/Posavasos.jpeg",
    descripcion:"Set de 4 posavasos con diseño de Daisy. Mantén tus superficies protegidas con estilo y color.",
    stock: 20,
    precio: 8.218
  },
  {
    id: 19,
    nombre: "Delantal familiar de Ratatouille",
    imagen: "../img/Delantal.jpeg",
    descripcion: "Delantal inspirado en Ratatouille. Cómodo, resistente y con diseño familiar. Perfecto para cocinar en equipo con un toque francés.",
    stock: 30,
    precio: 21.240
  },
  {
    id: 20,
    nombre: "Set Bowl + Plato Disney Dumbo",
    imagen: "../img/Dumbo.jpeg",
    descripcion: "El bowl y el plato de Dumbo no solo son funcionales, sino que también aportan un elemento decorativo a tu cocina. Añade un toque de alegría a tus comidas y haz que cada bocado sea memorable con este encantador set",
    stock: 10,
    precio: 24.103
  }
];


function actualizar() {
  let carrito = localStorage.getItem("totalproductos")
    document.getElementById("totalproducto").innerHTML = carrito
}

actualizar()

function cargarproductos() {
    for (let producto of productos) {
        let parrafo = document.createElement("div")
        parrafo.id = "boxproducto"
        parrafo.innerHTML = `
                    <h2 id="nombreproducto">${producto.nombre}</h2>
                    <img src="${producto.imagen}" alt="" id="${producto.imagen}">
                    <h3 id="precioproducto">$${producto.precio}</h3>
                    <button id="btncomprar" onclick="verdetalle(${producto.id})">Ver</button>
        `
        document.getElementById("boxproductos").appendChild(parrafo)
    }
}

cargarproductos()

function verdetalle(id) {
  let productoseleccionado = productos.find(producto => producto.id == id)
  let productojson = JSON.stringify(productoseleccionado)
  localStorage.setItem("detalle", productojson)
  window.location.href = "detalle.html"
}
