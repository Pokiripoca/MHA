//constantes
const modalTraining = document.getElementById("startTraining");
const modalTrailer = document.getElementById("watchTrailer");

const btnTraining = document.getElementById("vTraining");
const btnTrailer = document.getElementById("wTrailer");

const closeTraining = document.getElementById("closeTraining");
const closeTrailer = document.getElementById("closeTrailer");

btnTraining.onclick = function () {
  modalTraining.style.display = "flex";
};

btnTrailer.onclick = function () {
  modalTrailer.style.display = "flex";
};

closeTraining.onclick = function () {
  modalTraining.style.display = "none";
};

closeTrailer.onclick = function () {
  modalTrailer.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modalTraining) {
    modalTraining.style.display = "none";
  }
  if (event.target == modalTrailer) {
    modalTrailer.style.display = "none";
  }
};

//boton de enviado
const contactoForm = document.getElementById("contact-form");

contactoForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const nombre = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const mensaje = document.getElementById("message").value;

  const contenidoTxt = `Nuevo Reporte UA:
----------------------
Nombre: ${nombre}
Email: ${email}
Mensaje: ${mensaje}
----------------------`;
  const blob = new Blob([contenidoTxt], { type: "text/plain" });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");

  a.href = url;
  a.download = `Reporte_${nombre}.txt`;
  a.click();

  window.URL.revokeObjectURL(url);
  contactoForm.reset();

  alert("Tu reporte ha sido generado y descargado.");
});
