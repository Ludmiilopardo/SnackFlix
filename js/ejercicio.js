// Datos de comidas de películas
const comidasPeliculas = [
  {
    titulo: "Ratatouille",
    comida: "Ratatouille (estilo Provenzal)",
    imagen: "https://www.tasteofhome.com/wp-content/uploads/2023/04/how-to-make-ratatouille-TOHcom23_272027_P2_MD_02_23_7bv2.png",
    descripcion: "Plato clásico francés: capas o guiso de berenjena, calabacín, tomate, cebolla, ajo y hierbas (tomillo/romero). Perfecto para recrear la receta de la película.",
    
    
  },
  {
    titulo: "Pulp Fiction",
    comida: "Big Kahuna Burger (estilo hawaiano)",
    imagen: "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480_1_5x/img/recipe/ras/Assets/7f784da0-bbea-4f12-bd9b-be9360223c13/Derivates/5b6e78f1-4c47-40f9-91f4-460969b05f6d.jpg",
    descripcion: "Hamburguesa con toque tropical (piña a la parrilla, salsa tipo teriyaki/barbecue) inspirada en la mencionada en la película.",
    
  },
  {
    titulo: "El Padrino",
    comida: "Spaghetti con albóndigas",
    imagen: "https://www.65ymas.com/uploads/s1/74/09/75/albondigas-espaguetis.jpeg",
    descripcion: "Salsa marinara casera y albóndigas jugosas: receta tradicional italiana, ideal para recrear las cenas familiares de la película.",
  
  },
  {
    titulo: "La princesa y el sapo",
    comida: "Beignets estilo Nueva Orleans",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeKXi0tQ5AftbPYb3umEgSO_9P8FsxIi1k_g&s",
    descripcion: "Buñuelos fritos ligeros y esponjosos, espolvoreados con azúcar impalpable — clásicos del ambiente de Nueva Orleans que aparecen/evocan la película.",
  
  },
  {
    titulo: "Enredados",
    comida: "Galletitas con chips de chocolate",
    imagen: "https://hips.hearstapps.com/hmg-prod/images/cookies-galletas-elle-gourmet-65194337b17c2.jpg",
    descripcion: "Galletas clásicas: mantequilla, azúcar, huevo, esencia de vainilla y chips de chocolate — fáciles y perfectas para ver la película.",

  },
  {
    titulo: "Kung Fu Panda",
    comida: "Dumplings (jiaozi/gyoza)",
    imagen: "https://hips.hearstapps.com/hmg-prod/images/delish-202210-soupdumplings-182-1665605386.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*",
    descripcion: "Masa fina rellena (puede ser cerdo/pollo/verduras), con salsa de soja, vinagre y aceite de sésamo — muy representativos de la cocina que aparece en la película.",
   
  },
  {
    titulo: "La dama y el vagabundo",
    comida: "Spaghetti y albóndigas (escena del beso)",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Syf_gc6-y0tp6spVdHiZrNlHbpjO2TziJw&s",
    descripcion: "La clásica escena con spaghettis: receta inspirada en la película para una cena romántica (pasta + salsa + albóndigas).",

  },
  {
    titulo: "Harry Potter",
    comida: "Butterbeer (bebida inspirada en las tres escobas)",
    imagen: "https://www.liquor.com/thmb/hw-zIQt1GMIBYbj-HaqJYOBaaH0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__liquor__2017__09__29082714__harry-potter-butterbeer-720x720-article-2a54151404fd40ff8cc6a62dc2bbe770.jpg",
    descripcion: "Bebida dulce, con toques de butterscotch y espuma cremosa; ideal para acompañar maratones mágicos.",
    
  }
];
// Datos de comidas de series
const comidasSeries = [
  {
    titulo: "Friends",
    comida: "Sándwich de albóndigas de Joey",
    imagen: "https://resizer.glanacion.com/resizer/v2/sandwich-de-DX5COY2CT5DV3OBGP7ZGOP27B4.jpg?auth=c67d9999b6077df0338d63d324c9c0f51cd63fc7e3c20e20fd95b260a29724a5&width=420&height=280&quality=70&smart=true",
    descripcion: "El sándwich imbatible de Joey: pan largo, albóndigas en salsa marinara y mucho queso — el favorito del personaje.",
    
  },
  {
    titulo: "Stranger Things",
    comida: "Waffles 'Eggo' (estilo Eleven)",
    imagen: "https://thebakerupstairs.com/wp-content/uploads/2022/09/homemade_eggo_waffles_3.jpg",
    descripcion: "Los famosos waffles Eggo que ama Eleven: simples, crujientes por fuera y esponjosos por dentro; servilos con manteca o jarabe.",
   
  },
  {
    titulo: "Los Simpson",
    comida: "Rosquillas (Donuts) estilo Homero",
    imagen: "https://editorialtelevisa.brightspotcdn.com/dims4/default/cecbad5/2147483647/strip/true/crop/1195x672+3+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fk2-prod-editorial-televisa.s3.us-east-1.amazonaws.com%2Fbrightspot%2F2e%2F15%2Fddbe59064eee83ac3c5f21fa0822%2Frosquilla-homero.jpg",
    descripcion: "Donas glaseadas (rosa con sprinkles) — la versión casera reproduce la icónica rosquilla de Homero.",

  },
  {
    titulo: "The Office",
    comida: "Pretzels (Pretzel Day de Michael Scott)",
    imagen: "https://preview.redd.it/kbxkjfyz78i51.jpg?auto=webp&s=368c85bb8326c6522857f8b50d6a1d6ba4a950d9",
    descripcion: "Receta de pretzels suaves al estilo de la famosa 'Pretzel Day' que Michael tanto celebra.",
    
  },
  {
    titulo: "Game of Thrones",
    comida: "Quequitos / Lemon cakes (Sansa Stark)",
    imagen: "https://thegingeredwhisk.com/wp-content/uploads/2017/06/Lemon-Cakes-Sansa-Recipe-.jpg",
    descripcion: "Los delicados lemon cakes que Sansa disfruta en la serie; receta dulce con toque de limón, ideal para servir en porciones individuales.",
    
  },
  {
    titulo: "Gilmore Girls",
    comida: "Pancakes estilo Luke's Diner",
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjn4uPt6QALjbSTYYA67rg7oL5UZ9ruxnHhw&s",
    descripcion: "Pancakes grandes y abundantes (variante con calabaza opcional) como las que se sirven en Luke's Diner.",
   
  },
  {
    titulo: "How I Met Your Mother",
    comida: "Hamburguesa estilo Pub / MacLaren's",
    imagen: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/f7/34/26/classic-maclaren-s-cheeseburge.jpg?w=900&h=-1&s=1",
    descripcion: "Hamburguesa estilo pub: carne jugosa, cebollas caramelizadas y queso — ideal para recrear el ambiente del bar MacLaren's.",
    
  },
  {
    titulo: "Parks and Recreation",
    comida: "Waffles estilo Galentine's / JJ's Diner",
    imagen: "https://images.squarespace-cdn.com/content/v1/559dc96be4b099333339097f/1518487350839-EATOKM8B8DZUVHD5PIZ4/954A9493.jpg",
    descripcion: "Waffles con toppings (crema, frutas, jarabe) al estilo de las celebraciones de Leslie; fácil y vistoso para reuniones.",
    
  }
];

// Función para generar una carta de comida
function crearCard(comida) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${comida.imagen}" alt="${comida.comida}">
    <h3>${comida.comida}</h3>
    <p><strong>${comida.titulo}</strong></p>
    <p>${comida.descripcion}</p>
  `;
  return card;
}

// Insertar cartas de películas
const contenedorPeliculas = document.getElementById("cardsContainer");
comidasPeliculas.forEach(comida => {
  contenedorPeliculas.appendChild(crearCard(comida));
});

// Insertar cartas de series
const contenedorSeries = document.getElementById("cardsContainer2");
comidasSeries.forEach(comida => {
  contenedorSeries.appendChild(crearCard(comida));
});

// Función de búsqueda
 document.getElementById("searchInput").addEventListener("input", function () {
const filtro = this.value.toLowerCase();

const todasLasCards = document.querySelectorAll(".card");

todasLasCards.forEach(card => {
    const texto = card.innerText.toLowerCase();
    if (texto.includes (filtro)) {
    card.style.display = "block";
    } else {
    card.style.display = "none";
}
   });

});
