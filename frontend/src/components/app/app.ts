import { html, LitElement, css } from "lit";
import { Router } from "@vaadin/router";
import "../header/header";
import "../footer/footer";
import "../content/content";
import "../collection/collection";


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

      --color-blue: #475c6c;
      --color-grey: #8a8583;
      --color-brown: #cd8b62;
      --color-lightbeige: #f7efd3;
      --color-darkbeige: #eed7a1;
      --color-gold: #cfa959;
    }
    main {
      flex: 1;
    }

    app-header{
      display: flex;
      justify-content: center;
      aling-items: center;
      background-color: var(--color-blue);

    }

  `;


  firstUpdated() {
    const outlet = this.shadowRoot!.querySelector("main"); // Ziel für den Router
    const router = new Router(outlet);

    router.setRoutes([
      { path: "/", component: "app-content" }, // Route für die Startseite
      { path: "/collection", component: "app-collection" }, // Route für die Sammlung
    ]);
  }
  

  render() {
    return html`
      <app-header></app-header>
      <main>

      </main>
      <app-footer></app-footer>
    `;
  }
}

customElements.define("app-root", App);

