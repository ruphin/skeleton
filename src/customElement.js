const ShadyCSS = window.ShadyCSS;

export class CustomElement extends HTMLElement {
  static get is() {
    return 'custom-element';
  }

  constructor() {
    super();
    const template = document.createElement('template');
    template.innerHTML = this.templateString;
    if (ShadyCSS) {
      ShadyCSS.prepareTemplate(template, this.constructor.is);
    }
    this.template = template;
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const content = document.importNode(this.template.content, true);
    this.shadowRoot.appendChild(content);
    if (ShadyCSS) {
      ShadyCSS.styleElement(this);
    }
  }

  get styleString() {
    return `<style>
      ::host() {
        display: inline-block;
      }
    </style>`;
  }

  get templateString() {
    return `
      ${this.styleString}
      <span>Content!</span>
    `;
  }
}
