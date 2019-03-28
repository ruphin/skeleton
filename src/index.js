import { CustomElement } from './customElement.js';

class TestElement extends CustomElement {
  get templateString() {
    return `${super.templateString}<button>Click me!</button>`;
  }
}

customElements.define(TestElement.is, TestElement);
