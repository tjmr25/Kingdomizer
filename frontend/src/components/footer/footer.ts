import { html, css, LitElement } from "lit";
import { footerStyles } from "./footer.styles";

export class Footer extends LitElement {
  static styles = footerStyles;

  render() {
    return html`
      <footer>
        © 2025 Kingdomizer - All rights reserved.
      </footer>
    `;
  }
}

customElements.define("app-footer", Footer);