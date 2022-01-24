export default class Component {
  element;

  constructor(parentElement, className, htmlTag) {
    this.element = htmlTag;
    this.className = className;

    parentElement.append(this.element);
  }
}
