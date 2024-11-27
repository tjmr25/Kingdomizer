import { html, css, LitElement } from "lit";

export class Footer extends LitElement {
  static styles = css`
    footer {
      background-color: var(--color-blue); /* Hintergrundfarbe */
      color: var(--color-light); /* Schriftfarbe */
      padding: 0.5rem;
      text-align: center;
      font-size: 0.875rem;
    }
  `;

  render() {
    return html`
      <footer>
        © 2024 Kingdomizer - All rights reserved.
      </footer>
    `;
  }
}

customElements.define("app-footer", Footer);