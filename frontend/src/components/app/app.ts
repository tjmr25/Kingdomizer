import { html, LitElement, css } from "lit";
import "../header/header";
import "../footer/footer";
import "../content/content";

export class App extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      font-family: Arial, sans-serif;
      margin: 0rem;
    }
    main {
      flex: 1;
      padding: 1rem;
    }
  `;

  render() {
    return html`
      <app-header></app-header>
      <main>
        <app-content></app-content>
      </main>
      <app-footer></app-footer>
    `;
  }
}

customElements.define("app-root", App);

