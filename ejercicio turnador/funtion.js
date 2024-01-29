let turnoActual = 1;
let numeroTurno = 1;

function next() {
  turnoActual++;
  actualizarNumeroTurno();
  
}

function former() {
  if (turnoActual > 1) {
    turnoActual--;
	actualizarNumeroTurno();
  }
}

function actualizarNumeroTurno() {
	document.getElementById('display-turno').textContent = turnoActual;
  }

  function generarTurno() {
	const nuevaFila = document.createElement("tr");
	nuevaFila.innerHTML = `<td>${numeroTurno}</td>
						<td>
						  <button onclick="marcarEstado('verde', this)">Presente</button>
						  <button onclick="marcarEstado('rojo', this)">Cancelado</button>
						</td>`;
	document.getElementById("tabla-turnos-body").appendChild(nuevaFila);
	document.getElementById("tiket").textContent = 
	(` ${numeroTurno}`)
	numeroTurno++;
  }

  function marcarEstado(estado, boton) {
	const fila = boton.closest("tr");
	fila.classList.remove("verde", "rojo");
	fila.classList.add(estado);
  }
