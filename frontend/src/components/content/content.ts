import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { contentStyles } from "./content.styles";
import { Card } from "../card/card";

export const oldExpansions = ["BASE_1ST", "PROSPERITY_1ST", "SEASIDE_1ST"];

export class Content extends LitElement {
    @property({ type: Array }) fetchedCards: Card[] = [];
    @property({ type: Boolean }) isAccordionOpen = false;
    @property({ type: Object }) expansionStates = {
        BASE: true,
        BASE_1ST: false,
        BASE_2ND: true,
        PROSPERITY: true,
        PROSPERITY_1ST: false,
        PROSPERITY_2ND: true,
        SEASIDE: true,
        SEASIDE_1ST: false,
        SEASIDE_2ND: true,
        PLUNDER: true
    }

    static styles = contentStyles;

    async fetchCards(): Promise<void> {
      try {
        const response = await fetch("http://localhost:8080/api/kingdom/generate", {
          method: "POST", 
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(this.expansionStates),
        });
        if (!response.ok) {
          throw new Error("Fehler beim Abrufen der Karten");
        }
        this.fetchedCards = await response.json();

      } catch (error) {
        console.error("Fehler beim Abrufen der Karten:", error);
      }
    }

    async saveKingdom() {
      alert("(Noch nicht implementiert) Königreich gespeichert!");
    }

    /*
    async saveKingdom(): Promise<void> {
      try {
        const cardIds = this.cards.map((card) => card.id);
          const body = JSON.stringify({ cardIds });
  
        const response = await fetch("http://localhost:8080/api/kingdom/save", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body,
        });
        if (!response.ok) {
          throw new Error(`Fehler: ${response.statusText}`);
        }
  
        console.log("Kingdom erfolgreich gespeichert:", await response.json());
      } catch (error) {
        console.error("Fehler beim Speichern des Kingdoms:", error);
      }
    }
    */

    updateExpansionState(expansion: string, checked: boolean) {
      this.expansionStates = { ...this.expansionStates, [expansion]: checked };
    
      if (expansion === 'BASE_1ST' || expansion === 'BASE_2ND') {
        const isBase1stSelected = this.expansionStates['BASE_1ST'];
        const isBase2ndSelected = this.expansionStates['BASE_2ND'];
    
        this.expansionStates['BASE'] = isBase1stSelected || isBase2ndSelected;
      }
    
      if (expansion === 'SEASIDE_1ST' || expansion === 'SEASIDE_2ND') {
        const isSeaside1stSelected = this.expansionStates['SEASIDE_1ST'];
        const isSeaside2ndSelected = this.expansionStates['SEASIDE_2ND'];
    
        this.expansionStates['SEASIDE'] = isSeaside1stSelected || isSeaside2ndSelected;
      }
    
      if (expansion === 'PROSPERITY_1ST' || expansion === 'PROSPERITY_2ND') {
        const isProsperity1stSelected = this.expansionStates['PROSPERITY_1ST'];
        const isProsperity2ndSelected = this.expansionStates['PROSPERITY_2ND'];
    
        this.expansionStates['PROSPERITY'] = isProsperity1stSelected || isProsperity2ndSelected;
      }
    }

    toggleAccordion() {
      this.isAccordionOpen = !this.isAccordionOpen;
    }
    
    render() {
      return html`
        <div class="main-content">
          <div class="kingdom-display">

            <div class="button-container">
              <button @click="${this.fetchCards}">Neues Königreich</button>
              <button class="save-button" @click="${this.saveKingdom}">Speichern</button> 
            </div>
  
            <div class="divider"></div>
  
            <!-- Karten in zwei Reihen -->
            <div class="cards">
            ${this.fetchedCards.length === 0 ? Array(10)
                  .fill(null)
                  .map(() => html`<div class="card-placeholder"></div>`)
              : this.fetchedCards.map(
                  (fetchedCard) => html`
                  <app-card 
                    .name="${fetchedCard.name}" 
                    .cost="${fetchedCard.cost}" 
                    .cardTypes="${fetchedCard.cardTypes}" 
                    .expansion="${fetchedCard.expansion}">
                  </app-card>`
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
              
              
              <div class="expansion">
                <label class="expansion-label">
                  Plünderer
                  <input class="checkbox" type="checkbox" checked @change="${(e: Event) =>
                    this.updateExpansionState(
                      'PLUNDER',
                      (e.target as HTMLInputElement).checked
                    )}"/>
                </label>
              </div>
              
              <div class="accordion">

                <div class="accordion-header" @click="${this.toggleAccordion}">
                  ${this.isAccordionOpen 
                    ? html`Frühere Editionen<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="icon">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
                        </svg>`
                    : html`Frühere Editionen<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="icon">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>`}
                </div>
                
                <div class=""></div>
                
                <div class="accordion-content ${this.isAccordionOpen ? 'open' : ''}">
                  
                  <div class="expansion old">
                    <label class="expansion-label">
                      Basisspiel (1.Edition)
                      <input class="checkbox" type="checkbox" unchecked @change="${(e: Event) =>
                        this.updateExpansionState(
                          'BASE_1ST',
                          (e.target as HTMLInputElement).checked
                      )}"/>
                    </label>
                  </div>

                  <div class="expansion old">
                    <label class="expansion-label">
                      Blütezeit (1.Edition)
                      <input class="checkbox" type="checkbox" unchecked @change="${(e: Event) =>
                        this.updateExpansionState(
                          'PROSPERITY_1ST',
                          (e.target as HTMLInputElement).checked
                      )}"/>
                    </label>
                  </div>
                  
                  <div class="expansion old">
                    <label class="expansion-label">
                      Seaside (1.Edition)
                      <input class="checkbox" type="checkbox" unchecked @change="${(e: Event) =>
                        this.updateExpansionState(
                          'SEASIDE_1ST',
                          (e.target as HTMLInputElement).checked
                        )}"/>
                    </label>
                  </div>

                </div>
              </div>
            </div>
            `;
    }
    
  }

customElements.define("app-content", Content);


