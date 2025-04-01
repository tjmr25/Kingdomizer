import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { kingdomStyles } from "./kingdom.styles";
import {
  CardResponse,
  DependencyResponse,
  KingdomDetailsResponse,
  KingdomDetailsRequest
} from "../../types";
import "../card/card"; // Import the card component

/**
 * Kingdom component displays a Dominion kingdom setup.
 * Handles displaying the 10 supply pile cards, landscape cards (events, 
 * projects, etc.), and additional game materials.
 */
export class Kingdom extends LitElement {
  @property({ type: String })
  id: string = crypto.randomUUID(); // Unique identifier for this kingdom
  
  @property({ type: Array })
  kingdomCardIds: number[] = []; // Supply pile card IDs (10 cards)
  
  @property({ type: Array })
  landscapeCardIds: number[] = []; // Landscape card IDs (events, ways, projects)
  
  @property({ type: Number })
  landscapeCount: number = 2; // Number of landscape cards to show in placeholders
  
  @property({ type: Object })
  kingdomDetails: KingdomDetailsResponse | null = null; // Full card data from API
  
  @property({ type: Boolean })
  isLoading: boolean = false; // Tracks API request loading state
  
  @property({ type: Boolean })
  hasShownKingdom: boolean = false; // Tracks if kingdom has been displayed before

  @property({ type: Boolean })
  hasShownGameMaterials: boolean = false; // Tracks if game materials have been displayed before
  
  @property({ type: Number })
  previousGameMaterialsCount: number = 0; // Tracks the number of game materials in the previous kingdom
  
  // Store trait assignments
  private kingdomToTraitMap: Map<number, string> = new Map();
  private traitToKingdomMap: Map<number, string> = new Map();

  static styles = kingdomStyles;

  /**
   * Lifecycle method that triggers when properties change
   */
  updated(changedProperties: Map<string | number | symbol, unknown>) {
    // Fetch card details when IDs change
    if (changedProperties.has('kingdomCardIds') || changedProperties.has('landscapeCardIds')) {
      this.fetchKingdomDetails();
    }
    
    // Mark that we've shown a kingdom once cards are loaded
    if (this.kingdomDetails && this.kingdomDetails.cards && this.kingdomDetails.cards.length > 0) {
      // Only assign traits when new kingdom data is loaded
      if (changedProperties.has('kingdomDetails')) {
        const { kingdomToTrait, traitToKingdom } = this.assignTraitsToKingdomCards();
        this.kingdomToTraitMap = kingdomToTrait;
        this.traitToKingdomMap = traitToKingdom;
      }
      
      this.hasShownKingdom = true;
    }

    // Track game materials display and count
    if (this.kingdomDetails && this.kingdomDetails.dependencies) {
      const gameMaterials = this.kingdomDetails.dependencies.filter(dep => 
        ['KINGDOM_CARD', 'EXTRA_CARD', 'GAMEPART'].includes(dep.resourceCategory));
      
      if (gameMaterials.length > 0) {
        this.hasShownGameMaterials = true;
        this.previousGameMaterialsCount = gameMaterials.length;
      }
    }
  }

  /**
   * Fetches detailed card information from API
   */
  async fetchKingdomDetails() {
    // Only proceed if we have at least one card to display
    if ((!this.kingdomCardIds || this.kingdomCardIds.length === 0) && 
        (!this.landscapeCardIds || this.landscapeCardIds.length === 0)) {
      return;
    }

    try {
      this.isLoading = true;
      
      // Prepare request data
      const requestData: KingdomDetailsRequest = {
        kingdomCardIds: this.kingdomCardIds || [],
        landscape: this.landscapeCardIds || []
      };
      
      // Fetch card details from API
      const response = await fetch('http://localhost:8080/api/kingdom/details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to fetch: ${response.statusText}`);
      }

      const data: KingdomDetailsResponse = await response.json();
      
      // Check if data has the expected structure
      if (!data || !data.cards || !Array.isArray(data.cards)) {
        throw new Error('API returned invalid data format');
      }
      
      this.kingdomDetails = data;
      this.isLoading = false;
      
      // Display card flag statistics after successful API call
      // Use setTimeout to make it asynchronous
      setTimeout(() => this.displayCardFlagStatistics(), 0);
    } catch (error) {
      console.error('Error fetching kingdom cards:', error);
      this.isLoading = false;
    }
  }

  /**
   * Counts and displays card flag statistics in an alert
   */
  private displayCardFlagStatistics() {
    if (!this.kingdomDetails || !this.kingdomDetails.cards || this.kingdomDetails.cards.length === 0) {
      return;
    }
    
    // Initialize counters for each flag
    let plusActionCount = 0;
    let plusMultipleActionsCount = 0;
    let plusBuyCount = 0;
    let plusMultipleDrawsCount = 0;
    let trashCount = 0;
    let curseCount = 0;
    let attackCount = 0;
    
    // Count cards with each flag
    this.kingdomDetails.cards.forEach(card => {
      if (card.hasPlusAction) plusActionCount++;
      if (card.hasPlusMultipleActions) plusMultipleActionsCount++;
      if (card.hasPlusBuy) plusBuyCount++;
      if (card.hasPlusMultipleDraws) plusMultipleDrawsCount++;
      if (card.hasTrash) trashCount++;
      if (card.hasCurse) curseCount++;
      
      // Check for Attack card type
      if (card.cardTypes && card.cardTypes.includes('ATTACK')) attackCount++;
    });
    
    // Create alert message
    const message = `
+1 Aktion: ${plusActionCount}
+X Aktionen: ${plusMultipleActionsCount}
+1 Kauf: ${plusBuyCount}
+X Karten: ${plusMultipleDrawsCount}
Entsorgen: ${trashCount}
Flüche: ${curseCount}
Angriffe: ${attackCount}
    `.trim();
    
    // Display alert
    setTimeout(() => alert(message), 10);
  }

  /**
   * Filters and returns additional game materials (non-landscape dependencies)
   */
  private filterGameMaterials() {
    return this.kingdomDetails?.dependencies.filter((dependency: DependencyResponse) => 
      ['KINGDOM_CARD', 'EXTRA_CARD', 'GAMEPART'].includes(dependency.resourceCategory)
    ) || [];
  }

  /**
   * Filters and returns landscape cards (events, projects, etc)
   */
  private filterLandscapeCards() {
    return this.kingdomDetails?.dependencies.filter((dependency: DependencyResponse) => 
      !['KINGDOM_CARD', 'EXTRA_CARD', 'GAMEPART'].includes(dependency.resourceCategory)
    ) || [];
  }

  /**
   * Filters and returns only trait cards
   */
  private filterTraitCards() {
    return this.kingdomDetails?.dependencies.filter((dependency: DependencyResponse) => 
      dependency.resourceCategory === 'TRAIT'
    ) || [];
  }

  /**
   * Maps traits to randomly selected kingdom cards
   * For each trait, assigns it to a random kingdom card
   * Returns a map of card IDs to their assigned trait names
   */
  private assignTraitsToKingdomCards() {
    const traitCards = this.filterTraitCards();
    const kingdomCards = this.kingdomDetails?.cards || [];
    
    // If we have no traits or no kingdom cards, return empty map
    if (traitCards.length === 0 || kingdomCards.length === 0) {
      return {
        kingdomToTrait: new Map<number, string>(),
        traitToKingdom: new Map<number, string>()
      };
    }
    
    const kingdomToTrait = new Map<number, string>();
    const traitToKingdom = new Map<number, string>();
    
    // For each trait, randomly select a kingdom card
    traitCards.forEach(trait => {
      // Get available kingdom cards (those that don't already have a trait)
      const availableCardIndices = kingdomCards
        .map((card, index) => index)
        .filter(index => !kingdomToTrait.has(kingdomCards[index].id));
      
      // If no cards are available, we can't assign this trait
      if (availableCardIndices.length === 0) {
        return;
      }
      
      // Randomly select a card for this trait
      const randomIndex = Math.floor(Math.random() * availableCardIndices.length);
      const selectedCardIndex = availableCardIndices[randomIndex];
      const selectedCard = kingdomCards[selectedCardIndex];
      
      // Assign the trait to the card
      kingdomToTrait.set(selectedCard.id, trait.name);
      traitToKingdom.set(trait.id, selectedCard.name);
    });
    
    return { kingdomToTrait, traitToKingdom };
  }

  /**
   * Determines whether to show placeholders instead of actual cards
   */
  private shouldShowPlaceholders() {
    // Show placeholders if we've never shown a kingdom before or if we are loading
    return (!this.hasShownKingdom && !this.kingdomDetails) || 
           (!this.hasShownKingdom && (!this.kingdomCardIds || this.kingdomCardIds.length === 0)) ||
           this.isLoading;
  }

  /**
   * Determines whether to show landscape placeholders, only if landscape cards are selected
   */
  private shouldShowLandscapePlaceholders() {
    return this.shouldShowPlaceholders() && this.landscapeCount > 0;
  }

  render() {
    // Determine what sections to show
    const showPlaceholders = this.shouldShowPlaceholders();
    const showLandscapePlaceholders = this.shouldShowLandscapePlaceholders();
    
    // Only process if we have details
    const hasDetails = !!this.kingdomDetails && !this.isLoading;
    
    // Only process these if we actually have details
    const gameMaterials = hasDetails ? this.filterGameMaterials() : [];
    const landscapeCards = hasDetails ? this.filterLandscapeCards() : [];
    const hasLandscapeCards = hasDetails && landscapeCards.length > 0;
    const showLandscapeSection = showLandscapePlaceholders || hasLandscapeCards;
    const showGameMaterialSection = hasDetails && gameMaterials.length > 0;
    
    // Create 10 kingdom card placeholders with loading animation
    const kingdomPlaceholders = Array(10).fill(null).map(() => html`
      <div class="card-placeholder ${this.isLoading ? 'loading' : ''}">
        ${this.isLoading ? html`<div class="card-loading-spinner"></div>` : ''}
      </div>
    `);

    // Create landscape card placeholders with loading animation
    const landscapePlaceholders = Array(this.landscapeCount).fill(null).map(() => html`
      <div class="card-placeholder landscape-card ${this.isLoading ? 'loading' : ''}">
        ${this.isLoading ? html`<div class="card-loading-spinner"></div>` : ''}
      </div>
    `);

    return html`
      <!-- Main Kingdom Cards (10 supply piles) -->
      <div class="main-kingdom">
        ${showPlaceholders 
          ? kingdomPlaceholders
          : html`
              ${this.kingdomDetails?.cards.map(
                (card: CardResponse) => html`
                <app-card 
                  .name="${card.name}" 
                  .cost="${card.cost}" 
                  .cardTypes="${card.cardTypes}" 
                  .expansion="${card.expansion}"
                  .assignedTrait="${this.kingdomToTraitMap.get(card.id) || ''}">
                </app-card>`
              )}
            `
        }
      </div>

      <!-- Landscape Cards Section (Events, Projects, etc) -->
      ${showLandscapeSection ? html`
        <h3>Prophezeiungen, Landmarken, Projekte, Ereignisse & Wege</h3>
        
        <div class="extra-cards">
          ${showLandscapePlaceholders 
            ? landscapePlaceholders
            : html`
                ${landscapeCards.map(
                  (card: DependencyResponse) => html`
                  <app-card 
                    class="${card.hasLandscapeOrientation ? 'landscape-card' : ''}"
                    .name="${card.name}" 
                    .cost="${card.cost}" 
                    .cardTypes="${card.cardTypes}" 
                    .expansion="${card.expansion}"
                    .resourceCategory="${card.resourceCategory}"
                    .hasLandscapeOrientation="${card.hasLandscapeOrientation}"
                    .connectedCardName="${card.resourceCategory === 'TRAIT' ? this.traitToKingdomMap.get(card.id) || '' : ''}">
                  </app-card>`
                )}
              `
          }
        </div>
      ` : null}

      <!-- Game Materials Section (Additional Cards & Materials) -->
      ${showGameMaterialSection ? html`
        <h3>Zusatzkarten & Spielmaterial</h3>
        <div class="extra-cards">
          ${gameMaterials.map(
            (card: DependencyResponse) => html`
            <app-card 
              class="${card.hasLandscapeOrientation ? 'landscape-card' : ''}"
              .name="${card.name}" 
              .cost="${card.cost}" 
              .cardTypes="${card.cardTypes}" 
              .expansion="${card.expansion}"
              .resourceCategory="${card.resourceCategory}"
              .hasLandscapeOrientation="${card.hasLandscapeOrientation}">
            </app-card>`
          )}
        </div>
      ` : this.hasShownGameMaterials && this.isLoading ? html`
        <h3>Zusatzkarten & Spielmaterial</h3>
        <div class="extra-cards gamepart-placeholders">
          <!-- Show placeholders for game materials only when loading AND they have been shown before -->
          ${Array(Math.max(1, this.previousGameMaterialsCount)).fill(null).map(() => html`
            <div class="card-placeholder loading">
              <div class="card-loading-spinner"></div>
            </div>
          `)}
        </div>
      ` : null}
    `;
  }
}

customElements.define("app-kingdom", Kingdom);
