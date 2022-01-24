import Personaje from "./Personaje.js";

export default class Asesor extends Personaje {
  asesorado;
  emoji = "&#127891";
  constructor(nombreAsesor, familiaAsesor, edadAsesor, personajeAsesorado) {
    super(nombreAsesor, familiaAsesor, edadAsesor);
    if (personajeAsesorado instanceof Personaje) {
      this.asesorado = personajeAsesorado;
    }
    this.setEmoji(this.emoji);
  }

  comunicar() {
    return `${super.comunicar()}No sé por qué, pero creo que voy a morir pronto`;
  }
}
