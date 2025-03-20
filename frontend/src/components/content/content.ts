import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { contentStyles } from "./content.styles";
import { Card as CardComponent } from "../card/card";
import { GenerateKingdomResponse } from "../kingdom/kingdom.types";

export const oldExpansions = ["BASE_1ST", "PROSPERITY_1ST", "SEASIDE_1ST"];

export class Content extends LitElement {
    @property({ type: Array }) generatedCardIds: number[] = [];
    @property({ type: Array }) landscapeIds: number[] = [];
    @property({ type: Boolean }) isAccordionOpen = false;
    @property({ type: Boolean }) isFilterOptionsOpen = false;
    @property({ type: Number }) actionCards: number | null = null;
    @property({ type: Number }) attackCards: number | null = null;
    @property({ type: Number }) landscapeCount: number = 2;
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
    
    @property({ type: Object }) filterOptions = {
        hasMultipleActions: false,
        hasMultipleCards: false,
        hasBuy: false,
        hasReaction: false,
        hasTrash: false
    }
    
    @property({ type: Object }) exclusions = {
        curses: false,
        victoryTokens: false,
        tableaus: false,
        treasures: false,
        events: false,
        landmarks: false
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
        
        const data = await response.json();
        
        // Handle the response format
        if (typeof data === 'object' && data.kingdomCardIds) {
          this.generatedCardIds = data.kingdomCardIds;
          this.landscapeIds = data.landscape || [];
        } else {
          // Handle legacy format (just an array of IDs) - for backward compatibility
          this.generatedCardIds = data;
          this.landscapeIds = [];
        }

      } catch (error) {
        console.error("Fehler beim Abrufen der Karten:", error);
      }
    }

    async saveKingdom() {
      alert("(Noch nicht implementiert) Königreich gespeichert!");
    }

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
    
    updateFilterOption(option: string, checked: boolean) {
      this.filterOptions = { ...this.filterOptions, [option]: checked };
    }

    updateActionCards(event: Event) {
      const value = (event.target as HTMLInputElement).value;
      this.actionCards = value === '' ? null : Number(value);
    }

    updateAttackCards(event: Event) {
      const value = (event.target as HTMLInputElement).value;
      this.attackCards = value === '' ? null : Number(value);
    }

    updateLandscapeCount(event: Event) {
      const target = event.target as HTMLInputElement;
      this.landscapeCount = Number(target.value);
      
      // Update the CSS variable for the slider track
      target.style.setProperty('--value', target.value);
    }

    toggleAccordion() {
      this.isAccordionOpen = !this.isAccordionOpen;
    }
    
    toggleFilterOptions() {
      this.isFilterOptionsOpen = !this.isFilterOptionsOpen;
    }
    
    updateExclusion(exclusion: string, checked: boolean) {
      this.exclusions = { ...this.exclusions, [exclusion]: checked };
    }

    render() {
      
      return html`
        <div class="main-content">
          <div class="kingdom-display">

            <div class="button-container">
              <div class="left-buttons">
                <button @click="${this.fetchCards}">Neues Königreich</button>
                <button class="save-button" @click="${this.saveKingdom}">Speichern</button>
              </div>
              <div class="right-buttons">
                <button class="filter-button" @click="${this.toggleFilterOptions}">
                  Filteroptionen
                  ${this.isFilterOptionsOpen 
                    ? html`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="icon">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
                        </svg>`
                    : html`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="icon">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>`}
                </button>
              </div>
            </div>
            
            <div class="filter-options ${this.isFilterOptionsOpen ? 'open' : ''}">
              <h3 class="panel-heading">Mindestanforderungen</h3>
              <ul class="filter-options-list">
                <li class="filter-option">
                  <input 
                    type="checkbox" 
                    class="checkbox" 
                    id="hasMultipleActions" 
                    ?checked="${this.filterOptions.hasMultipleActions}"
                    @change="${(e: Event) => this.updateFilterOption('hasMultipleActions', (e.target as HTMLInputElement).checked)}"
                  />
                  <label for="hasMultipleActions" class="filter-option-label">+2 Aktionen</label>
                </li>
                <li class="filter-option">
                  <input 
                    type="checkbox" 
                    class="checkbox" 
                    id="hasMultipleCards" 
                    ?checked="${this.filterOptions.hasMultipleCards}"
                    @change="${(e: Event) => this.updateFilterOption('hasMultipleCards', (e.target as HTMLInputElement).checked)}"
                  />
                  <label for="hasMultipleCards" class="filter-option-label">+2 Karten</label>
                </li>
                <li class="filter-option">
                  <input 
                    type="checkbox" 
                    class="checkbox" 
                    id="hasBuy" 
                    ?checked="${this.filterOptions.hasBuy}"
                    @change="${(e: Event) => this.updateFilterOption('hasBuy', (e.target as HTMLInputElement).checked)}"
                  />
                  <label for="hasBuy" class="filter-option-label">+1 Kauf</label>
                </li>
                <li class="filter-option">
                  <input 
                    type="checkbox" 
                    class="checkbox" 
                    id="hasReaction" 
                    ?checked="${this.filterOptions.hasReaction}"
                    @change="${(e: Event) => this.updateFilterOption('hasReaction', (e.target as HTMLInputElement).checked)}"
                  />
                  <label for="hasReaction" class="filter-option-label">Reaktion</label>
                </li>
                <li class="filter-option">
                  <input 
                    type="checkbox" 
                    class="checkbox" 
                    id="hasTrash" 
                    ?checked="${this.filterOptions.hasTrash}"
                    @change="${(e: Event) => this.updateFilterOption('hasTrash', (e.target as HTMLInputElement).checked)}"
                  />
                  <label for="hasTrash" class="filter-option-label">Entsorgen</label>
                </li>
              </ul>
            </div>
            
            <div class="exclusions-panel ${this.isFilterOptionsOpen ? 'open' : ''}">
              <h3 class="panel-heading">Ausschlüsse</h3>
              <ul class="filter-options-list">
                <li class="filter-option">
                  <input 
                    type="checkbox" 
                    class="checkbox" 
                    id="excludeCurses" 
                    ?checked="${this.exclusions.curses}"
                    @change="${(e: Event) => this.updateExclusion('curses', (e.target as HTMLInputElement).checked)}"
                  />
                  <label for="excludeCurses" class="filter-option-label">Flüche</label>
                </li>
                <li class="filter-option">
                  <input 
                    type="checkbox" 
                    class="checkbox" 
                    id="excludeVictoryTokens" 
                    ?checked="${this.exclusions.victoryTokens}"
                    @change="${(e: Event) => this.updateExclusion('victoryTokens', (e.target as HTMLInputElement).checked)}"
                  />
                  <label for="excludeVictoryTokens" class="filter-option-label">Punktemarker</label>
                </li>
                <li class="filter-option">
                  <input 
                    type="checkbox" 
                    class="checkbox" 
                    id="excludeTableaus" 
                    ?checked="${this.exclusions.tableaus}"
                    @change="${(e: Event) => this.updateExclusion('tableaus', (e.target as HTMLInputElement).checked)}"
                  />
                  <label for="excludeTableaus" class="filter-option-label">Tableaus</label>
                </li>
                <li class="filter-option">
                  <input 
                    type="checkbox" 
                    class="checkbox" 
                    id="excludeTreasures" 
                    ?checked="${this.exclusions.treasures}"
                    @change="${(e: Event) => this.updateExclusion('treasures', (e.target as HTMLInputElement).checked)}"
                  />
                  <label for="excludeTreasures" class="filter-option-label">Kostbarkeiten</label>
                </li>
              </ul>
              
              <div class="exclusions-divider"></div>
              
              <ul class="filter-options-list">
                <li class="filter-option">
                  <input 
                    type="checkbox" 
                    class="checkbox" 
                    id="excludeEvents" 
                    ?checked="${this.exclusions.events}"
                    @change="${(e: Event) => this.updateExclusion('events', (e.target as HTMLInputElement).checked)}"
                  />
                  <label for="excludeEvents" class="filter-option-label">Events</label>
                </li>
                <li class="filter-option">
                  <input 
                    type="checkbox" 
                    class="checkbox" 
                    id="excludeLandmarks" 
                    ?checked="${this.exclusions.landmarks}"
                    @change="${(e: Event) => this.updateExclusion('landmarks', (e.target as HTMLInputElement).checked)}"
                  />
                  <label for="excludeLandmarks" class="filter-option-label">Merkmale</label>
                </li>
              </ul>
            </div>
            
            <div class="filter-panels-row ${this.isFilterOptionsOpen ? 'open' : ''}">
              <div class="left-panel">
                <h3 class="panel-heading">Kartenanzahl</h3>
                <div class="inputs-row">
                  <div class="input-group">
                    <label for="actionCards" class="input-label">+1 Aktion</label>
                    <input 
                      type="number" 
                      id="actionCards" 
                      class="number-input" 
                      min="0" 
                      max="10" 
                      placeholder="0-10"
                      .value="${this.actionCards === null ? '' : this.actionCards}"
                      @input="${this.updateActionCards}"
                    />
                  </div>
                  <div class="input-group">
                    <label for="attackCards" class="input-label">Angriffe</label>
                    <input 
                      type="number" 
                      id="attackCards" 
                      class="number-input" 
                      min="0" 
                      max="10"
                      placeholder="0-10" 
                      .value="${this.attackCards === null ? '' : this.attackCards}"
                      @input="${this.updateAttackCards}"
                    />
                  </div>
                </div>
              </div>
              <div class="right-panel">
                <h3 class="panel-heading">Querkarten</h3>
                <div class="inputs-row slider-row">
                  <div class="slider-group">
                    <label for="landscapeCount" class="input-label">Anzahl: <span class="value-display">${this.landscapeCount}</span></label>
                    <input 
                      type="range" 
                      id="landscapeCount" 
                      class="slider-input" 
                      min="0" 
                      max="6" 
                      step="1" 
                      .value="${this.landscapeCount}"
                      style="--value: ${this.landscapeCount}"
                      @input="${this.updateLandscapeCount}"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div class="divider"></div>
  
            <app-kingdom 
              .kingdomCardIds="${this.generatedCardIds}"
              .landscapeIds="${this.landscapeIds}"
              .landscapeCount="${this.landscapeCount}">
            </app-kingdom>

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

                <div class="accordion-header filter-button" @click="${this.toggleAccordion}">
                  Frühere Editionen
                  ${this.isAccordionOpen 
                    ? html`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="icon">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
                        </svg>`
                    : html`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="icon">
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


