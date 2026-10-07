const forma = document.querySelector(".forma");

const imja = document.querySelector("#imja");
const klass = document.querySelector("#klass");
const predmet = document.querySelector("#predmet");

const oshibkaImeni = document.querySelector("#imja-oshibka");
const oshibkaKlassa = document.querySelector("#klass-oshibka");
const oshibkaPredmeta = document.querySelector("#predmet-oshibka");
const oshibkaOcenki = document.querySelector("#ocenki-oshibka");

forma.addEventListener("submit", function (event) {
  event.preventDefault();

  const imjaText = imja.value.trim();
  const klassText = klass.value.trim();
  const predmetText = predmet.value.trim();

  const ocenki = forma.querySelector('input[name="rating"]:checked');

  oshibkaImeni.textContent = "";
  oshibkaKlassa.textContent = "";
  oshibkaPredmeta.textContent = "";
  oshibkaOcenki.textContent = "";

  let estOshibki = false;

  if (imjaText === "") {
    oshibkaImeni.textContent = "Palun sisesta nimi";
    estOshibki = true;
  }

  if (klassText === "") {
    oshibkaKlassa.textContent = "Palun sisesta klass";
    estOshibki = true;
  }

  if (predmetText === "") {
    oshibkaPredmeta.textContent = "Palun vali õppeaine";
    estOshibki = true;
  }

  if (ocenki === null) {
    oshibkaOcenki.textContent = "Palun vali hinne";
    estOshibki = true;
  }

  if (estOshibki) {
    return;
  }

  console.log("Все обязательные поля заполнены. Оценка:", ocenki.value);
});