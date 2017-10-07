import { customElement, bindable } from 'aurelia-framework';

@customElement('card')
export class Card {
  @bindable() editFunction;
  @bindable() item;
  parent;

  constructor() {
  }

  clickEdit(item) {
    this.editFunction();
  }
}