import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";

export class Content extends LitElement {
  @property({ type: Array }) cards: string[] = [];

  static styles = css`
    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 1rem;
    }
    .card {
      background-color: #fff;
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 1rem;
      text-align: center;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
  `;

  async fetchCards(): Promise<void> {
    try {
      const response = await fetch("http://localhost:8080/api/kingdom");
      if (!response.ok) {
        throw new Error("Fehler beim Abrufen der Karten");
      }
      this.cards = await response.json();
    } catch (error) {
      console.error("Fehler beim Abrufen der Karten:", error);
    }
  }

  render() {
    return html`
      <button @click="${this.fetchCards}">Königreich generieren</button>
      <div class="cards">
        ${this.cards.map((card) => html`<div class="card">${card}</div>`)}
      </div>
    `;
  }
}

customElements.define("app-content", Content);