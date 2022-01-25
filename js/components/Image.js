import Component from "./Component.js";

export default class Image extends Component {
  source;
  alt;
  constructor(parentElement, className, character) {
    super(parentElement, className, "img");

    this.element.src = character.image;
    this.alt = `${character.nombre} ${character.familia}`;
    parentElement.prepend(this.element);
  }
}
