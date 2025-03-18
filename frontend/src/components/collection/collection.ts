import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { ResponseCard } from "../kingdom/kingdom.types";

import "../card/card";

export interface Kingdom {
  id: number;
  createdAt: string; // ISO-String
  cards: ResponseCard[]; // List of card objects
}

export class Collection extends LitElement {    
    @property({ type: Array }) kingdoms: Kingdom[] = [];
    
    static styles = css`
        .collection-content {
          flex: 1; /* Nimmt den verbleibenden Platz ein */
          width: 60%; 
          max-width: 75rem; 
          min-width: 55rem;
          margin: 3rem auto 6rem auto; 
          padding: 2rem;  
          text-color: var(--color-gold);        
        }

        .divider {
          border-top: 1px solid var(--color-medium); 
          margin: 1rem 0 1rem; 
        }

        h2 {
            color: var(--color-dark);
        }

        .cards-container {
          display: grid;
          grid-template-columns: repeat(5, 1fr); 
          gap: 1rem; 
        }

        .single-kingdom {
          margin-top: 4rem;
        }

        .single-kingdom:first-child {
          margin-top: 3rem; 
        }
    `;

    async updated(changedProperties: Map<string, unknown>) {
        // Prüfen, ob relevante Eigenschaften sich geändert haben, falls nötig
        if (changedProperties.has('kingdoms')) {
          await this.fetchKingdoms();
        }
    }

    async fetchKingdoms(): Promise<void> {
        try {
          const response = await fetch("http://localhost:8080/api/kingdom", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
    
          if (!response.ok) {
            throw new Error(`Fehler: ${response.statusText}`);
          }
    
          const data: Kingdom[] = await response.json(); // Response-Daten als Kingdom-Liste
          this.kingdoms = data; // Kingdoms aktualisieren
        } catch (error) {
          console.error("Fehler beim Laden der Kingdoms:", error);
        }
      }

    render() {
        return html`
            <div class="collection-content">
                <div>
                    <h2>Meine Königreiche</h2>
                </div>

                <div class="divider"></div>

                <div class="kingdoms">
                ${this.kingdoms.map(
                  (kingdom) => html`
                    <div class="single-kingdom">
                      <h3>Kingdom ID: ${kingdom.id}</h3>
                      <p>Erstellt am: ${new Date(kingdom.createdAt).toLocaleDateString()}</p>
                      <div class="cards-container" >
                        <!-- Iteriere über die Karten des Kingdoms -->
                        ${kingdom.cards.map(
                          (card) => html`<app-card 
                            .name="${card.name}" 
                            .cost="${card.cost}" 
                            .cardTypes="${card.cardTypes}"
                            .expansion="${card.expansion}">
                          </app-card>`
                        )}
                      </div>
                    </div>
                  `
                )}
                </div>
             </div>
        `;
      }
}

customElements.define("app-collection", Collection);