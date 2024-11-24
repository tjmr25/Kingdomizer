import { html, css, LitElement } from "lit";

export class Header extends LitElement {
  static styles = css`
    header {
      background-color: #d7bce8;
      color: white;
      padding: 0.5rem;
      text-align: center;
      font-size: 1.2rem;
    }
  `;

  render() {
    return html`
      <header>
        <h1>Kingdomizer</h1>
      </header>
    `;
  }
}

customElements.define("app-header", Header);