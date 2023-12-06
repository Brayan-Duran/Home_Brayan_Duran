let citas = [];
let img = "";
let imgg = "";

let citasTer = [];
let citasCan = [];

let actu = null;
let indice = null;

// fecha--------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1); // Añadir un día

  let dd = tomorrow.getDate();
  let mm = tomorrow.getMonth() + 1; // January is 0!
  let yyyy = tomorrow.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }

  let tomorrowFormatted = yyyy + "-" + mm + "-" + dd;

  let fechaInput = document.getElementById("fecha");
  if (fechaInput) {
    fechaInput.setAttribute("min", tomorrowFormatted);
  }
});
// fecha--------------------------------------------------

function mostrar() {
  document.getElementById("formulario").style.display = "block";
}

function mostrarcard1() {
  // document.getElementById("card-abierto").style.display = "block";
  // document.getElementById("formulario").style.display = "none";
  // document.getElementById("card-terminado").style.display = "none";
  // document.getElementById("card-cancelada").style.display = "none";
  cards(1);
}

function mostrarcard2() {
  // document.getElementById("card-terminado").style.display = "block";
  // document.getElementById("formulario").style.display = "none";
  // document.getElementById("card-abierto").style.display = "none";
  // document.getElementById("card-cancelada").style.display = "none";
  cards(2);
}

function mostrarcard3() {
  // document.getElementById("card-cancelada").style.display = "block";
  // document.getElementById("formulario").style.display = "none";
  // document.getElementById("card-abierto").style.display = "none";
  // document.getElementById("card-terminado").style.display = "none";
  cards(3);
}

// -------------------------------------------------------------------
function registrar(event) {
  event.preventDefault();
  let nombre = document.getElementById("nombre").value;

  let propietario = document.getElementById("propietario").value;

  let telefono = document.getElementById("telefono").value;

  let tipo = document.getElementById("tipo").value;

  let fecha = document.getElementById("fecha").value;

  let tiempo = document.getElementById("tiempo").value;

  let motivo = document.getElementById("motivo").value;

  if (actu === true) {
    if (document.getElementById("nombre").value === "") {
      document.getElementById("textalert").textContent =
        "Por favor ingrese el nombre de la mascota";
      mostrarAlerta();
    } else if (document.getElementById("propietario").value === "") {
      document.getElementById("textalert").textContent =
        "Por favot ingrese el nombre del propietario";
      mostrarAlerta();
    } else if (document.getElementById("telefono").value === "") {
      document.getElementById("textalert").textContent =
        "Por favor ingrese un numero de telefono";
      mostrarAlerta();
    } else if (telefono.toString().length < 9) {
      document.getElementById(
        "textalert"
      ).textContent = `Por favor ingrese un numero de telefono con mas de 9 digitos, la contidad de digitos que ingreso son ${
        telefono.toString().length
      }`;
      mostrarAlerta();
    } else if (document.getElementById("fecha").value === "") {
      document.getElementById("textalert").textContent =
        "Por favor seleccione una fecha valida";
      mostrarAlerta();
    } else if (
      document.getElementById("tiempo").value < "07:00" ||
      document.getElementById("tiempo").value > "23:00"
    ) {
      document.getElementById("textalert").textContent =
        "Por favor seleccione una Hora valida entre las 7:00 a.m y las 11:00 p.m";
      mostrarAlerta();
    } else if (document.getElementById("motivo").value === "") {
      document.getElementById("textalert").textContent =
        "Por favor indiquenos los sintomas de su mascota";
      mostrarAlerta();
    } else {
      if (tipo === "perro") {
        imgg = "perro.jpg";
      } else if (tipo === "gato") {
        imgg = "gato.jpg";
      } else if (tipo === "gallina") {
        imgg = "gallina.jpg";
      } else if (tipo === "axolote") {
        imgg = "axolote.jpg";
      } else if (tipo === "t-rex") {
        imgg = "t-rex.jpg";
      }

      citas[indice].nombre = document.getElementById("nombre").value;
      citas[indice].propietario = document.getElementById("propietario").value;
      citas[indice].telefono = document.getElementById("telefono").value;
      citas[indice].tipo = document.getElementById("tipo").value;
      citas[indice].fecha = document.getElementById("fecha").value;
      citas[indice].tiempo = document.getElementById("tiempo").value;
      citas[indice].motivo = document.getElementById("motivo").value;
      citas[indice].imagen = imgg;
      document.getElementById("formulario").reset();
      actu = false;
    }
  } else {
    if (nombre === "") {
      document.getElementById("textalert").textContent =
        "Por favor ingrese el nombre de la mascota";
      mostrarAlerta();
    } else if (propietario === "") {
      document.getElementById("textalert").textContent =
        "Por favot ingrese el nombre del propietario";
      mostrarAlerta();
    } else if (telefono === "") {
      document.getElementById("textalert").textContent =
        "Por favor ingrese un numero de telefono";
      mostrarAlerta();
    } else if (telefono.toString().length < 9) {
      document.getElementById(
        "textalert"
      ).textContent = `Por favor ingrese un numero de telefono con mas de 9 digitos, la contidad de digitos que ingreso son ${
        telefono.toString().length
      }`;
      mostrarAlerta();
    } else if (fecha === "") {
      document.getElementById("textalert").textContent =
        "Por favor seleccione una fecha valida";
      mostrarAlerta();
    } else if (tiempo < "07:00" || tiempo > "23:00") {
      document.getElementById("textalert").textContent =
        "Por favor seleccione una Hora valida entre las 7:00 a.m y las 11:00 p.m";
      mostrarAlerta();
    } else if (motivo === "") {
      document.getElementById("textalert").textContent =
        "Por favor indiquenos los sintomas de su mascota";
      mostrarAlerta();
    } else {
      if (tipo === "perro") {
        img = "perro.jpg";
      } else if (tipo === "gato") {
        img = "gato.jpg";
      } else if (tipo === "gallina") {
        img = "gallina.jpg";
      } else if (tipo === "axolote") {
        img = "axolote.jpg";
      } else if (tipo === "t-rex") {
        img = "t-rex.jpg";
      }
  
      let paciente = {
        nombre: nombre,
        propietario: propietario,
        telefono: telefono,
        tipo: tipo,
        fecha: fecha,
        tiempo: tiempo,
        motivo: motivo,
        imagen: img,
      };
      citas.push(paciente);
      document.getElementById("formulario").reset();
    }
  }
  cards();
}

// -------------------------------------------------------------------
function editar(a, i) {
  actu = true;
  indice = i;

  document.getElementById("nombre").value = a.nombre;
  document.getElementById("propietario").value = a.propietario;
  document.getElementById("telefono").value = a.telefono;
  document.getElementById("tipo").value = a.tipo;
  document.getElementById("fecha").value = a.fecha;
  document.getElementById("tiempo").value = a.tiempo;
  document.getElementById("motivo").value = a.motivo;
}

// -------------------------------------------------------------------

function cards(cita) {
  let citasM = [];

  switch (cita) {
    case 1:
      citasM = citas;
      break;

    case 2:
      citasM = citasTer;
      break;

    case 3:
      citasM = citasCan;
      break;

    default:
      break;
  }

  let fragment = document.createDocumentFragment();
  document.getElementById("card-abierto").innerHTML = "";
  // document.getElementById("card-terminado").innerHTML = "";
  // document.getElementById("card-cancelada").innerHTML = "";
  // let tipoMascota = document.getElementById("tipo").value;

  citasM.forEach((item, index) => {
    let di1 = document.createElement("div");
    di1.setAttribute("class", "orden");
    let di2 = document.createElement("div");
    di2.setAttribute("class", "orden");
    let di3 = document.createElement("div");
    di3.setAttribute("class", "orden");
    let di4 = document.createElement("div");
    di4.setAttribute("class", "orden");
    let di5 = document.createElement("div");
    di5.setAttribute("class", "orden");
    let di6 = document.createElement("div");
    di6.setAttribute("class", "orden");

    let span1 = document.createElement("span");
    span1.textContent = "Propietario: ";
    span1.setAttribute("class", "letra");
    let span2 = document.createElement("span");
    span2.textContent = "Telefono: ";
    span2.setAttribute("class", "letra");
    let span3 = document.createElement("span");
    span3.textContent = "Tipo: ";
    span3.setAttribute("class", "letra");
    let span4 = document.createElement("span");
    span4.textContent = "Fecha: ";
    span4.setAttribute("class", "letra");
    let span5 = document.createElement("span");
    span5.textContent = "Hora: ";
    span5.setAttribute("class", "letra");
    let span6 = document.createElement("span");
    span6.textContent = "Motivo de Cita: ";
    span6.setAttribute("class", "letra");

    let div = document.createElement("div");
    div.setAttribute("class", "carDiv");
    let img = document.createElement("img");
    img.src = item.imagen;
    img.setAttribute("class", "carImg");
    let h2 = document.createElement("h2");
    h2.textContent = item.nombre;
    let p1 = document.createElement("span");
    p1.textContent = item.propietario;
    let p2 = document.createElement("span");
    p2.textContent = item.telefono;
    let p3 = document.createElement("span");
    p3.textContent = item.tipo;
    let p4 = document.createElement("span");
    p4.textContent = item.fecha;
    let p5 = document.createElement("span");
    p5.textContent = item.tiempo;
    let p6 = document.createElement("span");
    p6.textContent = item.motivo;
    p6.style.width = "80%";
    p6.style.wordWrap = "break-word";

    let button = document.createElement("button");
    button.textContent = "Editar cita";
    button.setAttribute("class", "but");
    button.addEventListener("click", () => {
      editar(item, index);
    });
    let select = document.createElement("select");
    select.addEventListener("change", () => {
      if (cita === 1) {
        if (select.value === "2") {
          citasTer.push(citas.splice(index, 1)[0]);
        } else if (select.value === "3") {
          citasCan.push(citas.splice(index, 1)[0]);
        }
      } else if (cita === 2) {
        if (select.value === "1") {
          citas.push(citasTer.splice(index, 1)[0]);
        } else if (select.value === "3") {
          citasCan.push(citasTer.splice(index, 1)[0]);
        }
      } else if (cita === 3) {
        if (select.value === "1") {
          citas.push(citasCan.splice(index, 1)[0]);
        } else if (select.value === "2") {
          citasTer.push(citasCan.splice(index, 1)[0]);
        }
      }
      cards(cita);
    });

    let option1 = document.createElement("option");
    option1.textContent = "abierto";
    option1.setAttribute("value", 1);
    let option2 = document.createElement("option");
    option2.textContent = "terminado";
    option2.setAttribute("value", 2);
    let option3 = document.createElement("option");
    option3.textContent = "cancelada";
    option3.setAttribute("value", 3);
    di1.appendChild(span1);
    di2.appendChild(span2);
    di3.appendChild(span3);
    di4.appendChild(span4);
    di5.appendChild(span5);
    di6.appendChild(span6);
    di1.appendChild(p1);
    di2.appendChild(p2);
    di3.appendChild(p3);
    di4.appendChild(p4);
    di5.appendChild(p5);
    di6.appendChild(p6);
    switch (cita) {
      case 1:
        select.appendChild(option1);
        select.appendChild(option2);
        select.appendChild(option3);
        break;

      case 2:
        select.appendChild(option2);
        select.appendChild(option1);
        select.appendChild(option3);
        break;

      case 3:
        select.appendChild(option3);
        select.appendChild(option1);
        select.appendChild(option2);
        break;

      default:
        break;
    }

    div.appendChild(img);
    div.appendChild(h2);
    div.appendChild(di1);
    div.appendChild(di2);
    div.appendChild(di3);
    div.appendChild(di4);
    div.appendChild(di5);
    div.appendChild(di6);
    div.appendChild(button);
    div.appendChild(select);
    fragment.appendChild(div);
  });
  document.getElementById("card-abierto").appendChild(fragment);
}

function mostrarAlerta() {
  var alertContainer = document.getElementById("alert");
  var alerta = document.getElementById("myAlert");

  alertContainer.style.visibility = "visible";
  alertContainer.style.opacity = 1;

  alerta.style.transform = "translateY(0%)";
}

function cerrarAlerta() {
  var alertContainer = document.getElementById("alert");
  var alerta = document.getElementById("myAlert");

  alerta.style.transform = "translateY(-50%)";
  alertContainer.style.visibility = "hidden";
  alertContainer.style.opacity = 0;
}
