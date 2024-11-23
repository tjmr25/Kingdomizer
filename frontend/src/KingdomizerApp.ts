import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";

export class KingdomizerApp extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: Arial, sans-serif;
      padding: 1rem;
      background-color: #f9f9f9;
    }

    h1 {
      color: #333;
    }

    button {
      padding: 0.5rem 1rem;
      background-color: #6200ea;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    button:hover {
      background-color: #3700b3;
    }

    ul {
      list-style: none;
      padding: 0;
    }

    li {
      margin: 0.5rem 0;
      padding: 0.5rem;
      background: #e3e3e3;
      border-radius: 5px;
    }
  `;

  // Reaktive Eigenschaft
  @property({ type: Array }) cards: string[] = [];

  // Methode: Karten vom Backend abrufen
  async fetchCards(): Promise<void> {
    try {
      const response = await fetch("http://localhost:8080/api/kingdom");
      if (!response.ok) {
        throw new Error("Fehler beim Abrufen der Daten");
      }
      this.cards = await response.json();
    } catch (error) {
      console.error("Fehler beim Abrufen der Karten:", error);
    }
  }

  // Rendern der Komponente
  render() {
    return html`
      <h1>Kingdomizer</h1>
      <button @click="${this.fetchCards}">Königreich generieren</button>
      <ul>
        ${this.cards.map((card) => html`<li>${card}</li>`)}
      </ul>
    `;
  }
}

customElements.define("kingdomizer-app", KingdomizerApp);
