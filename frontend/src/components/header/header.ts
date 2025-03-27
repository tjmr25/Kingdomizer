import { Router } from "@vaadin/router";
import { html, css, LitElement } from "lit";
import { headerStyles } from "./header.styles";

export class Header extends LitElement {
  static styles = headerStyles;

  navigateTo(path: string) {
    Router.go(path); // Navigiere zur URL
  }

  render() {
    return html`
      <header>
        <div class="spacer"></div>
        <h1 @click="${() => this.navigateTo('/')}">Kingdomizer</h1>
        <div class="floppy-disk" @click="${() => this.navigateTo('/')}">💾</div>
      </header>
    `;
  }
}

customElements.define("app-header", Header);