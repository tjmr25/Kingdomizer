import { html, LitElement } from 'lit';

// Definition der Hauptkomponente
export class KingdomizerApp extends LitElement {
  render() {
    return html`<h1>Hallo Welt!</h1>`;
  }
}

// Registrierung der Web-Komponente
customElements.define('kingdomizer-app', KingdomizerApp);