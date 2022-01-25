import Component from "./Component.js";

export default class Card extends Component {
  nombre;
  familia;
  edad;
  emoji;
  constructor(parentElement, className, character) {
    super(parentElement, className, "div");
    this.nombre = character.nombre;
    this.familia = character.familia;
    this.edad = character.edad;
    this.emoji = character.emoji;
    this.generateHTML();
  }

  generateHTML() {
    this.element.innerHTML = `<div class="card-body">
              <h2 class="character__name card-title h4">${this.nombre} ${this.familia}</h2>
              <div class="character__info">
                <ul class="list-unstyled">
                  <li>Edad: ${this.edad} años</li>
                  <li>
                    Estado:
                    <i class="fas fa-thumbs-down"></i>
                    <i class="fas fa-thumbs-up"></i>
                  </li>
                </ul>
              </div>
              <div class="character__overlay">
                <ul class="list-unstyled">
                  <li>Años de reinado: X</li>
                  <li>Arma: XXX</li>
                  <li>Destreza: X</li>
                  <li>Peloteo: X</li>
                  <li>Asesora a: X</li>
                  <li>Sirve a: X</li>
                </ul>
                <div class="character__actions">
                  <button class="character__action btn">habla</button>
                  <button class="character__action btn">muere</button>
                </div>
              </div>
            </div>
            <i class="emoji">${this.emoji}</i>
          </div>`;
  }
}
