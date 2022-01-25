import Card from "./js/components/Card.js";
import Component from "./js/components/Component.js";

function setEmoji(character) {
  document.querySelector(".emoji").innerHTML = character.emoji;
}
function isDead() {
  document.querySelector(".character__picture").style.transform =
    "rotate(180deg)";
}

const cardRow = document.querySelector(".row");
const cardColumn = new Component(cardRow, "character col", "li").element;
const card = new Card(cardColumn, "card character__card");
