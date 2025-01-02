import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { kingdomStyles } from "./kingdom.styles";


export class Kingdom extends LitElement {
  @property({ type: Array }) cards = [];

  static styles = kingdomStyles;

  render() {
    return html`
    
    `;
  }
}

customElements.define("app-kingdom", Kingdom);
