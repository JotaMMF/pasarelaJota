//------------Componentes------------
let btnInicio = document.querySelector("#Inicio");
let btnRandom = document.querySelector("#Random");
let btnAnterior = document.querySelector("#Anterior");
let btnSiguiente = document.querySelector("#Siguiente");

let img = document.querySelector("#Imagen");

let titulo = document.querySelector("#Titulo");

let descripcion = document.querySelector("#Descripcion");

let categorias = document.querySelector("#Categorias");

let listCategorias = document.querySelector("#listaCategorias");

//--------------Variables-------------

const galeriaCoches = {
  // Definimos los tipos de tracción
  tracciones: [
    { id: 0, nombre: "RWD" },
    { id: 1, nombre: "FWD" },
    { id: 2, nombre: "AWD" }
  ],

  // Definimos los tipos de motor
  motores: [
    { id: 0, descripcion: "Bóxer biturbo" },
    { id: 1, descripcion: "RB26DETT" },
    { id: 2, descripcion: "V8" },
    { id: 3, descripcion: "4 cilindros" },
    { id: 4, descripcion: "4 cilindros turbo" },
    { id: 5, descripcion: "Monocilíndrico" }
  ],

  // Definimos las categorías
  categorias: [
    { id: 0, nombre: "deportivos" },
    { id: 1, nombre: "compactos" },
    { id: 2, nombre: "rally" },
    { id: 3, nombre: "utilitarios" }
  ],

  // Aquí cada coche hace referencia a tracción, motor y categoría por id
  coches: [
    {
      marca: "RUF",
      modelo: "CTR2",
      bhp: 529,
      traccionId: 0, // RWD
      motorId: 0, // Bóxer biturbo
      categoriaId: 0, // deportivos
      img:
        "https://static.wikia.nocookie.net/gran-turismo/images/7/7d/RUF_CTR2_Sport.JPG",
      descripcion:
        "El RUF CTR2 es un deportivo alemán de altas prestaciones, derivado del Porsche 911, famoso por su ligereza y potencia extrema. Con un motor bóxer biturbo que entrega 529 BHP, es capaz de alcanzar velocidades impresionantes para su época. Su diseño combina aerodinámica agresiva con una estética clásica de superdeportivo alemán, y su conducción ofrece una experiencia pura y desafiante para los amantes del motor.",
      anno: 1995,
      url: "#"
    },
    {
      marca: "Nissan",
      modelo: "Skyline GT-R V-Spec II (R34)",
      bhp: 280,
      traccionId: 2, // AWD
      motorId: 1, // RB26DETT
      categoriaId: 0,
      img:
        "https://static.wikia.nocookie.net/gran-turismo/images/e/e9/-R-Nissan_SKYLINE_GT-R_V-Spec_%28R34%29_%2799_Scheme_2.jpg",
      descripcion:
        "El Nissan Skyline GT-R R34 V-Spec II es un icono japonés que combina tecnología avanzada con herencia de competición. Su motor RB26DETT de 280 BHP y tracción total (AWD) permiten aceleraciones rápidas y un manejo preciso. Este modelo es famoso por su equilibrio entre potencia, control y estabilidad, además de su reputación en la cultura automovilística japonesa y en videojuegos de carreras como Gran Turismo.",
      anno: 1999,
      url: "#"
    },
    {
      marca: "Shelby",
      modelo: "Cobra",
      bhp: 484,
      traccionId: 0, // RWD
      motorId: 2, // V8
      categoriaId: 0,
      img: "https://i.ytimg.com/vi/jF8S8yK9jgo/hqdefault.jpg",
      descripcion:
        "El Shelby Cobra es un clásico de la década de los 60 que combina un diseño icónico con un potente motor V8 de 484 BHP. Con tracción trasera y un chasis ligero, este vehículo ofrece sensaciones puras de conducción, destacando por su aceleración brutal y su rugido característico. Es un coche legendario, codiciado por coleccionistas y fanáticos del automovilismo clásico.",
      anno: 1965,
      url: "#"
    },
    {
      marca: "Ford",
      modelo: "GT40",
      bhp: 493,
      traccionId: 0,
      motorId: 2,
      categoriaId: 0,
      img:
        "https://static.wikia.nocookie.net/gran-turismo/images/1/19/Ford_gt40_race_car.jpg",
      descripcion:
        "El Ford GT40 es un deportivo de competición diseñado para dominar Le Mans en los años 60. Con un motor V8 de 493 BHP, tracción trasera y un diseño bajo y aerodinámico, se convirtió en un icono del automovilismo mundial. Su historial de victorias y su legendaria rivalidad con Ferrari lo convierten en un coche histórico y muy valorado por entusiastas y coleccionistas.",
      anno: 1966,
      url: "#"
    },
    {
      marca: "Mazda",
      modelo: "Demio",
      bhp: 98,
      traccionId: 1, // FWD
      motorId: 3, // 4 cilindros
      categoriaId: 1,
      img:
        "https://static.wikia.nocookie.net/gran-turismo/images/5/51/Mazda_DEMIO_GL-X_%2799_%28GT2%29.jpg",
      descripcion:
        "El Mazda Demio es un compacto urbano diseñado para la eficiencia y la comodidad en la ciudad. Con un motor de 4 cilindros y 98 BHP, ofrece un manejo ágil y un consumo de combustible reducido, ideal para desplazamientos diarios. Su diseño compacto y funcional maximiza el espacio interior y facilita el estacionamiento en entornos urbanos.",
      anno: 1999,
      url: "#"
    },
    {
      marca: "Honda",
      modelo: "Logo",
      bhp: 89,
      traccionId: 1,
      motorId: 3,
      categoriaId: 1,
      img:
        "https://static.wikia.nocookie.net/gran-turismo/images/5/5f/Honda_Logo_TS_%28J%29%2798.jpg",
      descripcion:
        "El Honda Logo es un pequeño hatchback japonés enfocado en la practicidad y la fiabilidad. Con 89 BHP y motor de 4 cilindros, es económico y fácil de mantener. Destaca por su maniobrabilidad en ciudad y su diseño simple pero funcional, siendo una opción confiable para conductores que buscan economía sin sacrificar comodidad.",
      anno: 1998,
      url: "#"
    },
    {
      marca: "Mitsubishi",
      modelo: "Lancer Evolution VI",
      bhp: 276,
      traccionId: 2, // AWD
      motorId: 4, // 4 cilindros turbo
      categoriaId: 2,
      img:
        "https://static.wikia.nocookie.net/gran-turismo/images/f/f8/Mitsubishi_Lancer_Evolution_VI_Rally_Car_%2799_%28GT2%29.jpg",
      descripcion:
        "El Mitsubishi Lancer Evolution VI es un sedán deportivo inspirado en los coches de rally, con motor 4 cilindros turbo y 276 BHP. Su tracción total (AWD) y suspensión ajustada para competición le permiten afrontar curvas a alta velocidad con gran estabilidad. Es un referente en la historia de los rallies y un coche muy querido por los aficionados a la conducción deportiva.",
      anno: 1999,
      url: "#"
    },
    {
      marca: "Daihatsu",
      modelo: "Midget",
      bhp: 30,
      traccionId: 0,
      motorId: 5,
      categoriaId: 3,
      img: "https://i.ytimg.com/vi/0SytOb_FWE8/maxresdefault.jpg",
      descripcion:
        "El Daihatsu Midget es un vehículo extremadamente pequeño diseñado para tareas ligeras y movilidad urbana. Con un motor monocilíndrico de 30 BHP, es ágil y económico, ideal para transportar cargas pequeñas en espacios reducidos. Su diseño peculiar y compacto lo convierte en un coche curioso y único en su segmento.",
      anno: 1957,
      url: "#"
    },
    {
      marca: "Nissan",
      modelo: "CUBE X",
      bhp: 80,
      traccionId: 1,
      motorId: 3,
      categoriaId: 3,
      img:
        "https://static.wikia.nocookie.net/gran-turismo/images/1/19/-R-Nissan_CUBE_X_%2798.jpg",
      descripcion:
        "El Nissan CUBE X es un coche práctico de diseño poco convencional, ideal para la ciudad y la familia pequeña. Con motor de 4 cilindros y 80 BHP, combina eficiencia y comodidad. Su interior espacioso y formas cuadradas permiten un uso versátil, destacando por su estilo distintivo y funcionalidad urbana.",
      anno: 1998,
      url: "#"
    }
  ]
};

const sndClick = new Audio("UIFX5.mp3");
const sndHover = new Audio("UIFX2.mp3");
const sndRandom = new Audio("UIFX7.mp3");

let indiceGaleria = 0;

//--------------Funciones-------------

function galInicio() {
  sndClick.pause();
  sndClick.currentTime=0;
  sndClick.play();
  indiceGaleria = 0;
  cargarObj(indiceGaleria);
}

function galRandom() {
  sndRandom.pause();
  sndRandom.currentTime=0;
  sndRandom.play();
  indiceGaleria= Math.floor(Math.random()*galeriaCoches.coches.length);
  cargarObj(indiceGaleria);
}

function galAnterior() {
  sndClick.pause();
  sndClick.currentTime=0;
  sndClick.play();
  if (indiceGaleria > 0) {
    indiceGaleria--;
  } else indiceGaleria = galeriaCoches.coches.length - 1;

  cargarObj(indiceGaleria);
}

function galSiguiente() {
  sndClick.pause();
  sndClick.currentTime=0;
  sndClick.play();
  if (indiceGaleria < galeriaCoches.coches.length - 1) {
    indiceGaleria++;
  } else indiceGaleria = 0;

  cargarObj(indiceGaleria);
}

function cargarObj(index) {
  img.src = galeriaCoches.coches[index].img;

  titulo.innerHTML ="#" + (index +1) + ": "+
    galeriaCoches.coches[index].marca +
    " " +
    galeriaCoches.coches[index].modelo;

  descripcion.innerHTML = galeriaCoches.coches[index].descripcion;

  categorias.innerHTML = listarDetallesCoche(index);
}

function buscarPorId(array, id) {
  // Recorremos el array elemento a elemento
  for (let i = 0; i < array.length; i++) {
    // Si el id del elemento coincide con el id que buscamos
    if (array[i].id === id) {
      // Devolvemos el objeto encontrado
      return array[i];
    }
  }

  // Si no se encuentra nada, devolvemos null
  return null;
}

function listarDetallesCoche(index) {
  let miLista = "";

  // Obtenemos el coche seleccionado
  const coche = galeriaCoches.coches[index];

  // Buscamos los datos relacionados
  const motor = buscarPorId(galeriaCoches.motores, coche.motorId);
  const traccion = buscarPorId(galeriaCoches.tracciones, coche.traccionId);
  const categoria = buscarPorId(galeriaCoches.categorias, coche.categoriaId);

  // Construimos la lista
  miLista += "<li>Motor: " + motor.descripcion + "</li>";
  miLista += "<li>Tracción: " + traccion.nombre + "</li>";
  miLista += "<li>Categoría: " + categoria.nombre + "</li>";

  return miLista;
}

function hover() {
  sndHover.pause();
  sndHover.currentTime=0;
  sndHover.play();
}


//------------EventListeners---------

btnInicio.addEventListener("click", galInicio);
btnInicio.addEventListener("mouseenter",hover);

btnRandom.addEventListener("click", galRandom);
btnRandom.addEventListener("mouseenter",hover);

btnAnterior.addEventListener("click", galAnterior);
btnAnterior.addEventListener("mouseenter",hover);

btnSiguiente.addEventListener("click", galSiguiente);
btnSiguiente.addEventListener("mouseenter",hover);

//---------------EJECUCIÓN-----------
cargarObj(0);
