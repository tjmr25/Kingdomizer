import { html, LitElement, css } from "lit";
import "../header/header";
import "../footer/footer";
import "../content/content";

export class App extends LitElement {
  static styles = css`
    :host {
      font-size: 16px;
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      font-family: Roboto, sans-serif;
      background-color: white;

      --color-dark: #333;      /* Dunkelste Farbe */
      --color-darker: #666;    /* Etwas heller als dark */
      --color-medium: #aaa;    /* Mittlere Graustufe */
      --color-lighter: #ccc;   /* Etwas dunkler als light */
      --color-light: #eee;     /* Hellste Farbe */
    }
    main {
      flex: 1;
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

