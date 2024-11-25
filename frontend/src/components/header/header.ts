import { html, css, LitElement } from "lit";

export class Header extends LitElement {
  static styles = css`
    header {
      height: 10vh; 
      max-height: 80px; 
      background-color: var(--color-light);
      color: var(--color-dark);
      display: flex;
      align-items: center; 
      justify-content: center; 
      font-size: 1.25rem; 
      text-transform: uppercase;       
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