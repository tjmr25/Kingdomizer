import { html, LitElement, css } from "lit";
import { Router } from "@vaadin/router";
import { appStyles } from "./app.styles";
import "../header/header";
import "../footer/footer";
import "../content/content";
import "../kingdom/kingdom"


export class App extends LitElement {
  static styles = appStyles;


  firstUpdated() {
    const outlet = this.shadowRoot!.querySelector("main"); // Ziel für den Router
    const router = new Router(outlet);

    router.setRoutes([
      { path: "/", component: "app-content" }, // Route für die Startseite
    ]);
  }
  

  render() {
    return html`
      <app-header></app-header>
      <main></main>
      <app-footer></app-footer>
    `;
  }
}

customElements.define("app-root", App);

