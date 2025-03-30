import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { contentStyles } from "./content.styles";
import { 
  GenerateKingdomResponse, 
  ExpansionSelections, 
  CardFeatureFilters, 
  CardTypeExclusions,
  oldExpansionIdentifiers,
  ExpansionFeature,
  expansionFeatures,
  featureTypes
} from "../../types";

// Define kingdom filter type locally
interface KingdomFilter {
  expansions: ExpansionSelections;
  cardFeatures: CardFeatureFilters;
  exclusions: CardTypeExclusions;
  minActionCards: number | null;
  minAttackCards: number | null;
  landscapeCount: number;
}

/**
 * Content component - Main interface for Dominion kingdom generation
 * Handles expansion selection, filtering options, and kingdom display
 */
export class Content extends LitElement {
    // Kingdom data properties
    @property({ type: Array }) kingdomCardIds: number[] = [];
    @property({ type: Array }) landscapeCardIds: number[] = [];
    
    // UI state properties
    @property({ type: Boolean }) isAccordionOpen = false;
    @property({ type: Boolean }) isFilterOptionsOpen = false;
    
    // Card filter properties
    @property({ type: Number }) landscapeCount: number = 2;
    @property({ type: Number }) actionCardsCount: number | null = null;
    @property({ type: Number }) attackCardsCount: number | null = null;
    
    // Expansion selection states
    @property({ type: Object }) expansionSelections: ExpansionSelections = {
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
    
    // Card feature filter options
    @property({ type: Object }) cardFeatureFilters: CardFeatureFilters = {
        hasMultipleActions: false,
        hasMultipleCards: false,
        hasBuy: false,
        hasReaction: false,
        hasTrash: false
    }
    
    // Card type exclusion options
    @property({ type: Object }) cardTypeExclusions: CardTypeExclusions = {
        curses: false,
        victoryTokens: false,
        tableaus: false,
        treasures: false,
        events: false,
        landmarks: false
    }

    @property({ type: Boolean })
    isLoading: boolean = false;

    static styles = contentStyles;

    /**
     * Fetches a new kingdom from the API based on current settings
     * Sends a complete filter object with all selection and filter criteria
     */
    async generateNewKingdom(): Promise<void> {
      try {
        // Set loading state to true
        this.isLoading = true;
        
        // Create the comprehensive filter object
        const filter: KingdomFilter = {
          expansions: this.expansionSelections,
          cardFeatures: this.cardFeatureFilters,
          exclusions: this.cardTypeExclusions,
          minActionCards: this.actionCardsCount,
          minAttackCards: this.attackCardsCount,
          landscapeCount: this.landscapeCount
        };
        
        // Send the full filter object to the API
        const response = await fetch("http://localhost:8080/api/kingdom/generate", {
          method: "POST", 
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(filter),
        });
        
        if (!response.ok) {
          throw new Error("Error fetching kingdom data");
        }
        
        const data = await response.json();
        
        // Add artificial delay
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Set the new kingdom data all at once
        this.kingdomCardIds = data.kingdomCardIds;
        this.landscapeCardIds = data.landscape || [];
        
        // Set loading state to false
        this.isLoading = false;

      } catch (error) {
        console.error("Error generating kingdom:", error);
        this.isLoading = false;
      }
    }

    /**
     * Updates expansion selection state and handles parent expansion states
     */
    updateExpansionSelection(expansion: string, isSelected: boolean) {
      this.expansionSelections = { ...this.expansionSelections, [expansion]: isSelected };
    
      // Update parent expansion states based on child selections
      if (expansion === 'BASE_1ST' || expansion === 'BASE_2ND') {
        this.expansionSelections['BASE'] = 
          this.expansionSelections['BASE_1ST'] || this.expansionSelections['BASE_2ND'];
      }
    
      if (expansion === 'SEASIDE_1ST' || expansion === 'SEASIDE_2ND') {
        this.expansionSelections['SEASIDE'] = 
          this.expansionSelections['SEASIDE_1ST'] || this.expansionSelections['SEASIDE_2ND'];
      }
    
      if (expansion === 'PROSPERITY_1ST' || expansion === 'PROSPERITY_2ND') {
        this.expansionSelections['PROSPERITY'] = 
          this.expansionSelections['PROSPERITY_1ST'] || this.expansionSelections['PROSPERITY_2ND'];
      }
    }
    
    /**
     * Updates card feature filter options
     */
    updateCardFeatureFilter(filterName: string, isEnabled: boolean) {
      this.cardFeatureFilters = { ...this.cardFeatureFilters, [filterName]: isEnabled };
    }

    /**
     * Updates card type exclusion settings
     */
    updateCardTypeExclusion(exclusionType: string, isExcluded: boolean) {
      this.cardTypeExclusions = { ...this.cardTypeExclusions, [exclusionType]: isExcluded };
    }

    /**
     * Updates action cards count filter
     */
    updateActionCardsCount(event: Event) {
      const value = (event.target as HTMLInputElement).value;
      this.actionCardsCount = value === '' ? null : Number(value);
    }

    /**
     * Updates attack cards count filter
     */
    updateAttackCardsCount(event: Event) {
      const value = (event.target as HTMLInputElement).value;
      this.attackCardsCount = value === '' ? null : Number(value);
    }

    /**
     * Updates landscape cards count and slider display
     */
    updateLandscapeCount(event: Event) {
      const target = event.target as HTMLInputElement;
      this.landscapeCount = Number(target.value);
      
      // Update the CSS variable for slider track display
      target.style.setProperty('--value', target.value);
    }
    
    /**
     * Toggles old expansions accordion visibility
     */
    toggleExpansionsAccordion() {
      this.isAccordionOpen = !this.isAccordionOpen;
    }
    
    /**
     * Toggles filter options panel visibility
     */
    toggleFilterOptionsPanel() {
      this.isFilterOptionsOpen = !this.isFilterOptionsOpen;
    }
    
    /**
     * Checks if any selected expansion has a specific feature
     */
    hasFeature(feature: ExpansionFeature): boolean {
      return Object.entries(this.expansionSelections)
        .some(([exp, isSelected]) => 
          isSelected && 
          expansionFeatures[exp as keyof typeof expansionFeatures]?.features.includes(feature)
        );
    }
    
    /**
     * Checks if any selected expansion has any landscape cards
     */
    hasLandscapeCards(): boolean {
      return Object.entries(this.expansionSelections)
        .some(([exp, isSelected]) => 
          isSelected && 
          expansionFeatures[exp as keyof typeof expansionFeatures]?.features.some((feature: ExpansionFeature) => 
            featureTypes.landscapeCards.includes(feature)
          )
        );
    }

    render() {
      return html`
        <div class="main-content">
          <div class="kingdom-display">

            <div class="button-container">
              <div class="left-buttons">
                <button @click="${this.generateNewKingdom}" ?disabled="${this.isLoading}">
                  Neues Königreich
                </button>
              </div>
              <div class="right-buttons">
                <button class="filter-button" @click="${this.toggleFilterOptionsPanel}">
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
                    ?checked="${this.cardFeatureFilters.hasMultipleActions}"
                    @change="${(e: Event) => this.updateCardFeatureFilter('hasMultipleActions', (e.target as HTMLInputElement).checked)}"
                  />
                  <label for="hasMultipleActions" class="filter-option-label">+2 Aktionen</label>
                </li>
                <li class="filter-option">
                  <input 
                    type="checkbox" 
                    class="checkbox" 
                    id="hasMultipleCards" 
                    ?checked="${this.cardFeatureFilters.hasMultipleCards}"
                    @change="${(e: Event) => this.updateCardFeatureFilter('hasMultipleCards', (e.target as HTMLInputElement).checked)}"
                  />
                  <label for="hasMultipleCards" class="filter-option-label">+2 Karten</label>
                </li>
                <li class="filter-option">
                  <input 
                    type="checkbox" 
                    class="checkbox" 
                    id="hasBuy" 
                    ?checked="${this.cardFeatureFilters.hasBuy}"
                    @change="${(e: Event) => this.updateCardFeatureFilter('hasBuy', (e.target as HTMLInputElement).checked)}"
                  />
                  <label for="hasBuy" class="filter-option-label">+1 Kauf</label>
                </li>
                <li class="filter-option">
                  <input 
                    type="checkbox" 
                    class="checkbox" 
                    id="hasReaction" 
                    ?checked="${this.cardFeatureFilters.hasReaction}"
                    @change="${(e: Event) => this.updateCardFeatureFilter('hasReaction', (e.target as HTMLInputElement).checked)}"
                  />
                  <label for="hasReaction" class="filter-option-label">Reaktion</label>
                </li>
                <li class="filter-option">
                  <input 
                    type="checkbox" 
                    class="checkbox" 
                    id="hasTrash" 
                    ?checked="${this.cardFeatureFilters.hasTrash}"
                    @change="${(e: Event) => this.updateCardFeatureFilter('hasTrash', (e.target as HTMLInputElement).checked)}"
                  />
                  <label for="hasTrash" class="filter-option-label">Entsorgen</label>
                </li>
              </ul>
            </div>
            
            <div class="exclusions-panel ${this.isFilterOptionsOpen ? 'open' : ''}">
              <h3 class="panel-heading">Ausschlüsse</h3>
              <ul class="filter-options-list">
                ${this.hasFeature('CURSE') ? html`
                <li class="filter-option">
                  <input 
                    type="checkbox" 
                    class="checkbox" 
                    id="excludeCurses" 
                    ?checked="${this.cardTypeExclusions.curses}"
                    @change="${(e: Event) => this.updateCardTypeExclusion('curses', (e.target as HTMLInputElement).checked)}"
                  />
                  <label for="excludeCurses" class="filter-option-label">Flüche</label>
                </li>
                ` : ''}
                ${this.hasFeature('TOKENS') ? html`
                <li class="filter-option">
                  <input 
                    type="checkbox" 
                    class="checkbox" 
                    id="excludeVictoryTokens" 
                    ?checked="${this.cardTypeExclusions.victoryTokens}"
                    @change="${(e: Event) => this.updateCardTypeExclusion('victoryTokens', (e.target as HTMLInputElement).checked)}"
                  />
                  <label for="excludeVictoryTokens" class="filter-option-label">Marker</label>
                </li>
                ` : ''}
                ${this.hasFeature('TABLEAUS') ? html`
                <li class="filter-option">
                  <input 
                    type="checkbox" 
                    class="checkbox" 
                    id="excludeTableaus" 
                    ?checked="${this.cardTypeExclusions.tableaus}"
                    @change="${(e: Event) => this.updateCardTypeExclusion('tableaus', (e.target as HTMLInputElement).checked)}"
                  />
                  <label for="excludeTableaus" class="filter-option-label">Tableaus</label>
                </li>
                ` : ''}
                ${this.hasFeature('LOOT') ? html`
                <li class="filter-option">
                  <input 
                    type="checkbox" 
                    class="checkbox" 
                    id="excludeTreasures" 
                    ?checked="${this.cardTypeExclusions.treasures}"
                    @change="${(e: Event) => this.updateCardTypeExclusion('treasures', (e.target as HTMLInputElement).checked)}"
                  />
                  <label for="excludeTreasures" class="filter-option-label">Kostbarkeiten</label>
                </li>
                ` : ''}
              </ul>
              
              ${this.hasLandscapeCards() ? html`
              <div class="exclusions-divider"></div>
              
              <ul class="filter-options-list">
                ${this.hasFeature('EVENTS') ? html`
                <li class="filter-option">
                  <input 
                    type="checkbox" 
                    class="checkbox" 
                    id="excludeEvents" 
                    ?checked="${this.cardTypeExclusions.events}"
                    @change="${(e: Event) => this.updateCardTypeExclusion('events', (e.target as HTMLInputElement).checked)}"
                  />
                  <label for="excludeEvents" class="filter-option-label">Ereignisse</label>
                </li>
                ` : ''}
                ${this.hasFeature('TRAITS') ? html`
                <li class="filter-option">
                  <input 
                    type="checkbox" 
                    class="checkbox" 
                    id="excludeLandmarks" 
                    ?checked="${this.cardTypeExclusions.landmarks}"
                    @change="${(e: Event) => this.updateCardTypeExclusion('landmarks', (e.target as HTMLInputElement).checked)}"
                  />
                  <label for="excludeLandmarks" class="filter-option-label">Merkmale</label>
                </li>
                ` : ''}
              </ul>
              ` : ''}
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
                      .value="${this.actionCardsCount === null ? '' : this.actionCardsCount}"
                      @input="${this.updateActionCardsCount}"
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
                      .value="${this.attackCardsCount === null ? '' : this.attackCardsCount}"
                      @input="${this.updateAttackCardsCount}"
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
              .kingdomCardIds="${this.kingdomCardIds}"
              .landscapeCardIds="${this.landscapeCardIds}"
              .landscapeCount="${this.landscapeCount}"
              .isLoading="${this.isLoading}"
            ></app-kingdom>
          </div>
          
          <div class="expansion-sidebar">
              <div class="expansion">
                <label class="expansion-label">
                  Basisspiel II
                  <input class="checkbox" type="checkbox" checked @change="${(e: Event) =>
                    this.updateExpansionSelection(
                      'BASE_2ND',
                      (e.target as HTMLInputElement).checked
                  )}"/>
                </label>
              </div>

              
              <div class="expansion">
                <label class="expansion-label">
                  Blütezeit II
                  <input class="checkbox" type="checkbox" checked @change="${(e: Event) =>
                    this.updateExpansionSelection(
                      'PROSPERITY_2ND',
                      (e.target as HTMLInputElement).checked
                    )}"/>
                </label>
              </div>
              
              
              <div class="expansion">
                <label class="expansion-label">
                  Seaside II
                  <input class="checkbox" type="checkbox" checked @change="${(e: Event) =>
                    this.updateExpansionSelection(
                      'SEASIDE_2ND',
                      (e.target as HTMLInputElement).checked
                    )}"/>
                </label>
              </div>
              
              
              <div class="expansion">
                <label class="expansion-label">
                  Plünderer
                  <input class="checkbox" type="checkbox" checked @change="${(e: Event) =>
                    this.updateExpansionSelection(
                      'PLUNDER',
                      (e.target as HTMLInputElement).checked
                    )}"/>
                </label>
              </div>
              
              <div class="accordion">

                <div class="accordion-header filter-button" @click="${this.toggleExpansionsAccordion}">
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
                      Basisspiel I
                      <input class="checkbox" type="checkbox" unchecked @change="${(e: Event) =>
                        this.updateExpansionSelection(
                          'BASE_1ST',
                          (e.target as HTMLInputElement).checked
                      )}"/>
                    </label>
                  </div>

                  <div class="expansion old">
                    <label class="expansion-label">
                      Blütezeit I
                      <input class="checkbox" type="checkbox" unchecked @change="${(e: Event) =>
                        this.updateExpansionSelection(
                          'PROSPERITY_1ST',
                          (e.target as HTMLInputElement).checked
                      )}"/>
                    </label>
                  </div>
                  
                  <div class="expansion old">
                    <label class="expansion-label">
                      Seaside I
                      <input class="checkbox" type="checkbox" unchecked @change="${(e: Event) =>
                        this.updateExpansionSelection(
                          'SEASIDE_1ST',
                          (e.target as HTMLInputElement).checked
                        )}"/>
                    </label>
                  </div>

                </div>
              </div>
            </div>
        </div>
      `;
    }
    
  }

customElements.define("app-content", Content);


