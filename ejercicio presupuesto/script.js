let arr = [];
let indice = null;
let acum = 0;

function agregar() {
  let nombre = document.getElementById("nombre").value;

  let cantidad = document.getElementById("cantidad").value;

  let presupuesto = quitarDolares(document.getElementById("rpre1").textContent);

  let restante = quitarDolares(document.getElementById("rpre2").textContent);

  let boton = document.getElementById("button1");

  let cambio = document.getElementById("rpres2");

  let resultado = restante - cantidad;

  let alco = document.getElementById("alco");
 
  if (nombre === "") {
    document.getElementById("owo").textContent =
      "Por favor ingrese un nombre, está vacio";
      alco.style.backgroundColor = "#f55e5e"
      alco.style.color = "black";
    showAlert();
  } else if (parseInt(cantidad) <= 0) {
    document.getElementById("owo").textContent =
      "Por favor ingrese un numero valido";
      alco.style.backgroundColor = "#f55e5e"
      alco.style.color = "black";
    showAlert();
  } else if (cantidad === "") {
    document.getElementById("owo").textContent =
      "Por favor ingrese un precio, está vacio";
      alco.style.backgroundColor = "#f55e5e"
      alco.style.color = "black";
    showAlert();
  } else {
    if (resultado < 0) {
      document.getElementById("owo").textContent =
        "No tiene presupuesto suficiente para esta compra";
        alco.style.backgroundColor = "#f55e5e"
      alco.style.color = "black";
      showAlert();
    } else {
      if (resultado <= (presupuesto * 20) / 100) {
        cambio.style.backgroundColor = "rgb(255, 127, 127)";
        cambio.style.color = "white";
      }
      if (resultado <= 0) {
        document.getElementById("button1").disabled = true;
        boton.style.backgroundColor = "grey";
        boton.style.borderColor = "white";
      }
      document.getElementById("owo").textContent = "Transaccion exitosa";
      alco.style.backgroundColor = "rgb(59, 214, 28)"
      alco.style.color = "black";
      showAlert();
      const numeroFormateado2 = formatearNumeroConPunto(parseInt(cantidad));
      const numeroFormateado = formatearNumeroConPunto(parseInt(resultado));
      let contenido = {
        nombre: nombre,
        cantidad: numeroFormateado2,
      };

      arr.push(contenido);
      document.getElementById("nombre").value = "";
      document.getElementById("cantidad").value = "";
      document.getElementById("rpre2").textContent = numeroFormateado;
      document.getElementById("t").innerHTML = "";
      rellenar();
    }
  }
}


function agpr() {
  let pre = document.getElementById("pre").value;
  let alco = document.getElementById("alco");
  const numeroFormateado = formatearNumeroConPunto(parseInt(pre));
  if (pre === "") {
    document.getElementById("owo").textContent =
      "Presupuesto esta vacio, ingrese uno por favor";
      alco.style.backgroundColor = "#f55e5e"
      alco.style.color = "black";
    showAlert();
  } else if (parseInt(pre) <= 0) {
    document.getElementById("owo").textContent =
      "Por favor ingrese un numero valido";
      alco.style.backgroundColor = "#f55e5e"
      alco.style.color = "black";
    showAlert();
    document.getElementById("pre").value = "";
  } else {
    document.getElementById("rpre1").textContent = `${numeroFormateado}`;
    document.getElementById("rpre2").textContent = `${numeroFormateado}`;
    document.getElementById("alert").style.zIndex = -1;
    document.getElementById("lk").style.zIndex = -1;
    document.getElementById("alert").style.display="none" 
    
  }
}

function rellenar() {
  let cre = document.createDocumentFragment();
  arr.forEach((item, index) => {
    let tr = document.createElement("tr");
    tr.setAttribute("class", "rec");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let buttom = document.createElement("button");
    buttom.textContent = "Borrar";
    buttom.setAttribute("class", "button1")
    buttom.addEventListener("click", () => {
      elimina(index, quitarDolares(item.cantidad));
    });
    td1.textContent = item.nombre;
    td2.textContent = `$${item.cantidad}`;
    td3.appendChild(buttom);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    cre.appendChild(tr);
    document.getElementById("t").appendChild(cre);
  });
}

function showAlert() {
  document.getElementById("custom-alert").style.display = "block";
}

function closeAlert() {
  document.getElementById("custom-alert").style.display = "none";
}

function elimina(i, cantidad) {
  index = i;
  let presupuesto = quitarDolares(document.getElementById("rpre1").textContent);
  let restante = quitarDolares(document.getElementById("rpre2").textContent);
  let boton = document.getElementById("button1");
  let resultado = restante + parseInt(cantidad);

  let cambio = document.getElementById("rpres2");
  if (resultado >= (presupuesto * 20) / 100) {
    cambio.style.backgroundColor = "aquamarine";
    cambio.style.color = "rgb(26, 39, 219)";
  }
  boton.style.backgroundColor = "#f35115";
  boton.style.borderColor = "#f35115";
  document.getElementById("button1").disabled = false;

  arr.splice(index, 1);
  const numeroFormateado = formatearNumeroConPunto(parseInt(resultado));
  document.getElementById("rpre2").textContent = numeroFormateado;

  document.getElementById("t").innerHTML = "";
  rellenar();
}

// Función para formatear el número con un punto como separador de miles
function formatearNumeroConPunto(numero) {
  return numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}


function quitarDolares(dolar) {
  let split = dolar.split(".");
  return parseInt(split.join(""));
}