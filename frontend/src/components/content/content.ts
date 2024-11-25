import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";

export class Content extends LitElement {
  @property({ type: Array }) cards: string[] = [];

  static styles = css`
    @keyframes fadeIn {
      from {
        opacity: 0; /* Unsichtbar */
        transform: translateY(20px); /* Start leicht nach unten verschoben */
      }
      to {
        opacity: 1; /* Voll sichtbar */
        transform: translateY(0); /* Zur Originalposition */
      }
    }

    .main-content {
      flex: 1; /* Nimmt den verbleibenden Platz ein */
      width: 60%; 
      max-width: 75rem; 
      margin: 6rem auto 0 auto; 
      padding: 2rem; 
      background-color: var(--color-light); 
      box-shadow: 0 0.25rem 0.625rem rgba(0, 0, 0, 0.1); 
    }

    .button-container {
      display: flex; 
      justify-content: flex-start; 
      align-items: center; 
      margin-bottom: 1rem; 
    }

    .divider {
      border-top: 1px solid var(--color-medium); 
      margin: 2rem 0 2rem; 
    }

    .cards {
      display: grid;
      grid-template-columns: repeat(5, 1fr); 
      gap: 1rem; 
    }

    .card {
      background-color: white;
      color: var(--color-darker);
      border: none;
      border-radius: 0.5rem;
      height: 150px;  
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      text-transform: uppercase; 
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

      opacity: 0;
      transform: translate(20px);
      transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
      animation: fadeIn 0.5s ease-out forwards; /* Dauer des Fade-In */
    }

    .card-placeholder {
      background-color: var(--color-light);
      border: 1px solid var(--color-lighter); /* Umriss der Karte */
      border-radius: 0.5rem;
      height: 150px; 
      box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.3); 
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-darker);
      font-size: 1rem;
      text-transform: uppercase;
    }

    button {
      padding: 0.75rem 1.5rem; 
      background-color: var(--color-medium); 
      color: var(--color-light); 
      border: none; 
      border-radius: 0.5rem; 
      font-size: 1rem; 
      font-weight: bold; 
      cursor: pointer; 
      transition: background-color 0.3s ease-in-out, transform 0.2s ease-in-out; 
    }

    button:hover {
      background-color: var(--color-darker); /* Hintergrundfarbe dunkler beim Hover */
    }

    button:active {
      transform: scale(0.95); /* Leichtes "Drücken"-Gefühl beim Klicken */
  }


  `;

  async fetchCards(): Promise<void> {
    try {
      const response = await fetch("http://localhost:8080/api/kingdom");
      if (!response.ok) {
        throw new Error("Fehler beim Abrufen der Karten");
      }

      //Timeout und leeren der Karten, um die Animation erneut auszuführen
      this.cards = [];
      //await new Promise((resolve) => setTimeout(resolve, 50));

      this.cards = await response.json();
    } catch (error) {
      console.error("Fehler beim Abrufen der Karten:", error);
    }
  }

  render() {
    return html`
      <div class="main-content">
        
        <div class="button-container">
          <button @click="${this.fetchCards}">CLICK ME!</button>
        </div>

        <div class="divider"></div>

        <!-- Karten in zwei Reihen -->
        <div class="cards">
        ${this.cards.length === 0 ? Array(10)
              .fill(null)
              .map(() => html`<div class="card-placeholder">Leer</div>`)
          : this.cards.map(
              (card, index) => html`<div class="card">${card}</div>`
            )}
        </div>
      </div>
    `;
  }
}

customElements.define("app-content", Content);