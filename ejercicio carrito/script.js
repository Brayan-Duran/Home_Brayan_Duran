let carrito = [];

let productos = [
  {
    id: 1,
    nombre: "Figura de Monkie D. Luffy",
    estrellas: "⭐⭐⭐⭐⭐",
    precio: 500,
    img: "luffy.jpg",
  },
  {
    id: 2,
    nombre: "Figura All Might de BNH",
    estrellas: "⭐⭐⭐⭐⭐",
    precio: 1000,
    img: "sas.jpg",
  },
  {
    id: 3,
    nombre: "Figura Goku ssj3",
    estrellas: "⭐⭐⭐⭐⭐",
    precio: 600,
    img: "goku.jpg",
  },
  {
    id: 4,
    nombre: "Figura deadpool",
    estrellas: "⭐⭐⭐⭐⭐",
    precio: 200,
    img: "ded.jpg",
  },
  {
    id: 5,
    nombre: "Figura de Dio Brando JoJo's",
    estrellas: "⭐⭐⭐⭐⭐",
    precio: 900,
    img: "dio.jpg",
  },
  {
    id: 6,
    nombre: "Figura de Ghost Rader",
    estrellas: "⭐⭐⭐⭐⭐",
    precio: 5000,
    img: "gos.jpg",
  },
  {
    id: 7,
    nombre: "Chamarra del anime Pullover",
    estrellas: "⭐⭐⭐⭐⭐",
    precio: 800,
    img: "ch.jpg",
  },
  {
    id: 8,
    nombre: "Bolso del anime Naruto",
    estrellas: "⭐⭐⭐⭐⭐",
    precio: 300,
    img: "bol.jpg",
  },
  {
    id: 9,
    nombre: "Zapatos del anime AOT",
    estrellas: "⭐⭐⭐⭐⭐",
    precio: 3000,
    img: "at.jpg",
  },
  {
    id: 10,
    nombre: "chaqueta del anime AOT",
    estrellas: "⭐⭐⭐⭐⭐",
    precio: 12000,
    img: "att.jpg",
  },
  {
    id: 11,
    nombre: "Almuada de Gojo JK",
    estrellas: "⭐⭐⭐⭐⭐",
    precio: 100,
    img: "go.jpg",
  },
  {
    id: 12,
    nombre: "Peluche de Snorlax",
    estrellas: "⭐⭐⭐⭐⭐",
    precio: 800,
    img: "vo.jpg",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  agregar();
});

function agregar() {
  let fragment = document.createDocumentFragment();
  productos.forEach((item, index) => {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = item.img;
    let h2 = document.createElement("h2");
    h2.textContent = item.nombre;
    let p = document.createElement("p");
    p.textContent = formatearNumeroConPunto(item.precio);
    let p2 = document.createElement("p");
    p2.textContent = item.estrellas;
    let button = document.createElement("button");
    button.textContent = "Agregar al carrito";
    button.addEventListener("click", () => {
      agpr(item);
    });
    div.appendChild(img);
    div.appendChild(h2);
    div.appendChild(p);
    div.appendChild(p2);
    div.appendChild(button);
    fragment.appendChild(div);
  });

  document.getElementById("card").appendChild(fragment);
}

function rellenar() {
  document.getElementById("t").innerHTML = "";
  let frag = document.createDocumentFragment();

  let total=0

  carrito.forEach((item, index) => {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let img = document.createElement("img");
    img.src = item.imagen;
    img.setAttribute("class", "imgc")
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let descartar = document.createElement("button");
    descartar.textContent = "❌";
    descartar.addEventListener("click", () => {
      descartar2(index);
    });
    td1.appendChild(img);
    td2.textContent = item.nombre;
    td3.textContent = formatearNumeroConPunto(item.precio)
    td4.textContent = item.cantidad;
    td5.appendChild(descartar);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    frag.appendChild(tr);
    total= total + item.precio * item.cantidad
  });

  if(carrito.length){
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");

    td2.textContent = "total: ";
    td3.textContent = formatearNumeroConPunto(total);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    frag.appendChild(tr);
  }

  document.getElementById("t").appendChild(frag);
}

function descartar2(i) {
  index = i;
  carrito.splice(index, 1);
  rellenar()
}

function x() {
  let car = document.getElementById("car");
  car.style.display = "block";
}

function z() {
  let car = document.getElementById("car");
  car.style.display = "none";
}

function agpr(item) {

  let w = carrito.findIndex((element) => element.id == item.id ); 
  

  if (w != -1) {
    carrito[w].cantidad = carrito[w].cantidad + 1;
  } else {
    let itemt = {
      id: item.id,
      imagen: item.img,
      nombre: item.nombre,
      precio: item.precio,
      cantidad: 1,
    };

    carrito.push(itemt);
  }
  document.getElementById("t").innerHTML = "";
  rellenar();
}


 function vaciar(){
  carrito= []
  document.getElementById("t").innerHTML = "";
 }


 function formatearNumeroConPunto(numero) {
  return numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}