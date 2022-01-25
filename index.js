import Card from "./js/components/Card.js";
import Component from "./js/components/Component.js";
import Image from "./js/components/Image.js";
import listaPersonajes from "./js/personajes.js";

function isDead() {
  document.querySelector(".character__picture").style.transform =
    "rotate(180deg)";
}

const joffreyImage = "img/joffrey.jpg";
const bronnImage = "img/bronn.jpg";
const daenerysImage = "img/daenerys.jpg";
const jaimeImage = "img/jaime.jpg";
const tyrionImage = "img/tyrion.jpg";

const cardRow = document.querySelector(".row");

function assignImage(personaje) {
  switch (personaje.nombre) {
    case "Joffrey":
      personaje.image = "img/joffrey.jpg";
      break;
    case "Bronn":
      personaje.image = "img/bronn.jpg";
      break;
    case "Daenerys":
      personaje.image = "img/daenerys.jpg";
      break;
    case "Jaime":
      personaje.image = "img/jaime.jpg";
      break;
    case "Tyrion":
      personaje.image = "img/tyrion.jpg";
      break;
    default:
      personaje.image = "img/no-one.jpg";
  }
}
function assignEmoji(personaje) {
  switch (personaje.constructor.name) {
    case "Rey":
      personaje.emoji = "&#128081";
      break;
    case "Luchador":
      personaje.emoji = "&#128481";
      break;
    case "Asesor":
      personaje.emoji = "&#127891";
      break;
    case "Escudero":
      personaje.emoji = "&#128737";
      break;
    default:
  }
}
function createCards() {
  for (let i = 0; i < listaPersonajes.length; i += 1) {
    assignImage(listaPersonajes[i]);
    assignEmoji(listaPersonajes[i]);
    const cardColumn = new Component(cardRow, "character col", "li").element;
    const card = new Card(
      cardColumn,
      "card character__card",
      listaPersonajes[i]
    ).element;
    const profile = new Image(
      card,
      "character__picture card-img-top",
      listaPersonajes[i]
    );
  }
}
createCards();
console.log(listaPersonajes);
