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
