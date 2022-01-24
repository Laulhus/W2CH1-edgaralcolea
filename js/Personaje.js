export default class Personaje {
  nombre;
  familia;
  edad;
  vivo = true;
  serie = "Juego de Tronos";
  emoji;

  constructor(nombrePersonaje, familiaPersonaje, edadPersonaje) {
    this.nombre = nombrePersonaje;
    this.familia = familiaPersonaje;
    this.edad = edadPersonaje;
  }

  setEmoji(emoji) {
    document.querySelector(".emoji").innerHTML = emoji;
  }

  comunicar() {
    return `${this.nombre} dice: `;
  }

  muere() {
    this.vivo = false;
  }
}
