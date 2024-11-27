import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";

import "../card/card";

interface Card {
  name: string;
  cost: number;
  expansion: string;
  types: string[];
}

export class Content extends LitElement {
    @property({ type: Array }) cards: Card[] = [];
    @property({ type: Object }) expansionStates = {
      BASE_2ND: true,
      PROSPERITY_2ND: true,
      SEASIDE_2ND: true,
    };

    static styles = css`
        .main-content {
          flex: 1; /* Nimmt den verbleibenden Platz ein */
          display: grid;
          grid-template-columns: 80% 20%;
          width: 75%; 
          max-width: 75rem; 
          min-width: 60rem;
          margin: 6rem auto 6rem auto; 
          padding: 2rem; 
          background-color: var(--color-light); 
          box-shadow: 0 0.25rem 0.625rem rgba(0, 0, 0, 0.1); 
        }

        .kindom-display {
          
        }
        
        .expansion-sidebar {
          padding-left: 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        
        .expansion {
          background-color: white;
          border-radius: 8px;
          display: flex; /* Aktiviert Flexbox */
          justify-content: space-between; /* Text links, Checkbox rechts */
          align-items: center; /* Vertikal zentriert */
          transition: transform 0.2s ease-in-out;
          box-shadow: 0 0.25rem 0.625rem rgba(0, 0, 0, 0.1); 
          color: var(--color-dark);
        }

        .expansion:active {
          transform: scale(0.95); /* Leichtes Drücken */
        }

        .expansion-label {
          display: flex;
          padding: 0.75rem 0.75rem;
          justify-content: space-between;
          align-items: center;
          width: 100%; /* Damit das Label den gesamten Bereich einnimmt */
          cursor: pointer; /* Zeigt an, dass das gesamte Element klickbar ist */
          font-size: 0.875rem;
        }

        .button-container {
          display: flex; 
          justify-content: flex-start; 
          align-items: center; 
          margin-bottom: 1rem; 
        }
        
        button {
          padding: 0.75rem 1.5rem; 
          background-color: var(--color-lighter); 
          box-shadow: 0 0.25rem 0.625rem rgba(0, 0, 0, 0.1); 
          color: white; 
          border: none; 
          border-radius: 8px; 
          font-size: 1rem; 
          font-weight: bold; 
          cursor: pointer; 
          transition: background-color 0.3s ease-in-out, transform 0.2s ease-in-out; 
        }

        button:hover {
          background-color: var(--color-medium); /* Hintergrundfarbe dunkler beim Hover */
        }

        button:active {
          transform: scale(0.95); /* Leichtes "Drücken"-Gefühl beim Klicken */
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

        .checkbox {
          accent-color: var(--color-darker);
        }

        .checkbox:hover {
          cursor: pointer;
        }

    `;

    async fetchCards(): Promise<void> {
      try {
        const response = await fetch("http://localhost:8080/api/kingdom", {
          method: "POST", 
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(this.expansionStates),
        });
        if (!response.ok) {
          throw new Error("Fehler beim Abrufen der Karten");
        }

        this.cards = [];
        this.cards = await response.json();
      } catch (error) {
        console.error("Fehler beim Abrufen der Karten:", error);
      }
    }

    updateExpansionState(expansion: string, checked: boolean) {
      this.expansionStates = { ...this.expansionStates, [expansion]: checked };
    }

    render() {
      return html`
        <div class="main-content">
          <div class="kingdom-display">

            <div class="button-container">
              <button @click="${this.fetchCards}">Königreich generieren</button>
            </div>
  
            <div class="divider"></div>
  
            <!-- Karten in zwei Reihen -->
            <div class="cards">
            ${this.cards.length === 0 ? Array(10)
                  .fill(null)
                  .map(() => html`<div class="card-placeholder"></div>`)
              : this.cards.map(
                  (card) => html`<app-card name="${card.name}" cost="${card.cost}" types="${card.types.join(", ")}"></app-card>`
                )}
            </div>

          </div>
          <div class="expansion-sidebar">
              <div class="expansion">
                <label class="expansion-label">
                  Basisspiel (2.Edition)
                  <input class="checkbox" type="checkbox" checked @change="${(e: Event) =>
                    this.updateExpansionState(
                      'BASE_2ND',
                      (e.target as HTMLInputElement).checked
                  )}"/>
                </label>
              </div>

              <div class="expansion">
                <label class="expansion-label">
                  Blütezeit (2.Edition)
                  <input class="checkbox" type="checkbox" checked @change="${(e: Event) =>
                    this.updateExpansionState(
                      'PROSPERITY_2ND',
                      (e.target as HTMLInputElement).checked
                  )}"/>
                </label>
              </div>

              <div class="expansion">
                <label class="expansion-label">
                  Seaside (2.Edition)
                  <input class="checkbox" type="checkbox" checked @change="${(e: Event) =>
                    this.updateExpansionState(
                      'SEASIDE_2ND',
                      (e.target as HTMLInputElement).checked
                  )}"/>
                </label>
              </div>
              
          </div>
          
        </div>
      `;
    }

}

customElements.define("app-content", Content);