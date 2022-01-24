import Personaje from "./Personaje.js";

export default class Rey extends Personaje {
  anyosReinado;
  emoji = "&#128081";

  constructor(nombreRey, familiaRey, edadRey, anyosReinadoRey) {
    super(nombreRey, familiaRey, edadRey);
    this.anyosReinado = anyosReinadoRey;
    this.setEmoji(this.emoji);
  }

  comunicar() {
    return `${super.comunicar()}Vais a morir todos`;
  }
}
