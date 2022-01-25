import Component from "./Component.js";

export default class Image extends Component {
  source;
  alt;
  constructor(parentElement, className, source, alt) {
    super(parentElement, className, "img");

    this.element.src = source;
    this.alt = alt;
    parentElement.prepend(this.element);
  }
}
