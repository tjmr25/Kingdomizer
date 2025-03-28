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
  showLoadingAnimation: boolean = false; // Controls loading animation visibility
  
  @property({ type: Boolean })
  showWhiteTransition: boolean = false; // Controls white transition between loading and cards
  
  // Persistently store trait assignments
  private kingdomToTrait = new Map<number, string>();
  private traitToKingdom = new Map<number, string>();
  private hasAssignedTraits = false;
 
  static styles = kingdomStyles;

  /**
   * Lifecycle method that triggers when properties change
   */
  updated(changedProperties: Map<string | number | symbol, unknown>) {
    // Fetch card details when IDs change
    if (changedProperties.has('kingdomCardIds') || changedProperties.has('landscapeCardIds')) {
      // Reset trait assignments when kingdom changes
      this.hasAssignedTraits = false;
      this.kingdomToTrait.clear();
      this.traitToKingdom.clear();
      
      // Only show loading animation if we've already shown a kingdom before
      if (this.hasShownKingdom) {
        this.showLoadingAnimation = true;
        // Don't clear kingdomDetails to avoid flash of empty state
        this.fetchKingdomDetails();
      } else {
        // For first load, just fetch the data without animation
        this.fetchKingdomDetails();
      }
    }
    
    // Mark that we've shown a kingdom once cards are loaded
    if (this.kingdomDetails && this.kingdomDetails.cards && this.kingdomDetails.cards.length > 0) {
      this.hasShownKingdom = true;
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
      
      // If we're showing loading animation, handle transitions
      if (this.showLoadingAnimation) {
        // Show loading cards for exactly 800ms
        setTimeout(() => {
          // Switch to white transition
          this.performBatchUpdate(() => {
            this.showLoadingAnimation = false;
            this.showWhiteTransition = true;
          });
          
          // Show white cards for exactly 150ms
          setTimeout(() => {
            // Switch to actual cards
            this.performBatchUpdate(() => {
              this.kingdomDetails = data;
              this.isLoading = false;
              this.showWhiteTransition = false;
            });
          }, 150); // White cards visible duration
        }, 800); // Show loading cards duration
      } else if (!this.hasShownKingdom) {
        // For first kingdom generation, show white transition after placeholders
        this.performBatchUpdate(() => {
          this.showWhiteTransition = true;
        });
        
        // Show white cards for exactly 150ms
        setTimeout(() => {
          // Switch to actual cards
          this.performBatchUpdate(() => {
            this.kingdomDetails = data;
            this.isLoading = false;
            this.showWhiteTransition = false;
          });
        }, 150); // White cards visible duration
      } else {
        this.kingdomDetails = data;
        this.isLoading = false;
      }
    } catch (error) {
      console.error('Error fetching kingdom cards:', error);
      this.performBatchUpdate(() => {
        this.isLoading = false;
        this.showLoadingAnimation = false;
        this.showWhiteTransition = false;
      });
    }
  }
  
  /**
   * Helper method to perform batched property updates
   * This ensures all property changes happen in a single update
   * to prevent any transition effects between updates
   */
  private performBatchUpdate(updateFn: () => void) {
    // Disable automatic property reflection temporarily
    this.hasUpdated = false;
    
    // Perform all updates
    updateFn();
    
    // Force a single update
    this.requestUpdate();
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
   * Only assigns traits once per kingdom to keep assignments stable
   */
  private assignTraitsToKingdomCards() {
    // If we've already assigned traits for this kingdom, return the existing maps
    if (this.hasAssignedTraits) {
      return {
        kingdomToTrait: this.kingdomToTrait,
        traitToKingdom: this.traitToKingdom
      };
    }
    
    const traitCards = this.filterTraitCards();
    const kingdomCards = this.kingdomDetails?.cards || [];
    
    // If we have no traits or no kingdom cards, return empty maps
    if (traitCards.length === 0 || kingdomCards.length === 0) {
      return {
        kingdomToTrait: this.kingdomToTrait,
        traitToKingdom: this.traitToKingdom
      };
    }
    
    // Clear existing assignments
    this.kingdomToTrait.clear();
    this.traitToKingdom.clear();
    
    // For each trait, randomly select a kingdom card
    traitCards.forEach(trait => {
      // Get available kingdom cards (those that don't already have a trait)
      const availableCardIndices = kingdomCards
        .map((card, index) => index)
        .filter(index => !this.kingdomToTrait.has(kingdomCards[index].id));
      
      // If no cards are available, we can't assign this trait
      if (availableCardIndices.length === 0) {
        return;
      }
      
      // Randomly select a card for this trait
      const randomIndex = Math.floor(Math.random() * availableCardIndices.length);
      const selectedCardIndex = availableCardIndices[randomIndex];
      const selectedCard = kingdomCards[selectedCardIndex];
      
      // Assign the trait to the card
      this.kingdomToTrait.set(selectedCard.id, trait.name);
      this.traitToKingdom.set(trait.id, selectedCard.name);
    });
    
    // Mark that we've assigned traits for this kingdom
    this.hasAssignedTraits = true;
    
    return {
      kingdomToTrait: this.kingdomToTrait,
      traitToKingdom: this.traitToKingdom
    };
  }

  /**
   * Determines whether to show placeholders instead of actual cards
   */
  private shouldShowPlaceholders() {
    // Only show placeholders if we've never shown a kingdom before and not in white transition
    return !this.hasShownKingdom && !this.showWhiteTransition && !this.kingdomDetails;
  }

  /**
   * Determines whether to show landscape placeholders, only if landscape cards are selected
   */
  private shouldShowLandscapePlaceholders() {
    return this.shouldShowPlaceholders() && this.landscapeCount > 0;
  }
  
  /**
   * Creates loading cards that display a pulsing "K"
   * @param count Number of loading cards to create
   * @param isLandscape Whether the cards should use landscape styling
   */
  private createLoadingCards(count: number, isLandscape: boolean = false) {
    return Array(count).fill(null).map(() => html`
      <div class="loading-card ${isLandscape ? 'landscape-card' : ''}">
        <div class="loading-letter">K</div>
      </div>
    `);
  }
  
  /**
   * Creates white transition cards to show between loading and actual cards
   * @param count Number of white cards to create
   * @param isLandscape Whether the cards should use landscape styling
   */
  private createWhiteCards(count: number, isLandscape: boolean = false) {
    return Array(count).fill(null).map(() => html`
      <div class="white-card ${isLandscape ? 'landscape-card' : ''}"></div>
    `);
  }

  render() {
    // Determine what sections to show
    const showPlaceholders = this.shouldShowPlaceholders();
    const showLandscapePlaceholders = this.shouldShowLandscapePlaceholders();
    
    // Only process if we have details
    const hasDetails = !!this.kingdomDetails;
    
    // Only process these if we actually have details
    const gameMaterials = hasDetails ? this.filterGameMaterials() : [];
    const landscapeCards = hasDetails ? this.filterLandscapeCards() : [];
    const hasLandscapeCards = hasDetails && landscapeCards.length > 0;
    const showLandscapeSection = showLandscapePlaceholders || hasLandscapeCards;
    const showGameMaterialSection = hasDetails && gameMaterials.length > 0;
    
    // Assign traits to kingdom cards (only done once per kingdom)
    const { kingdomToTrait, traitToKingdom } = hasDetails ? this.assignTraitsToKingdomCards() : { 
      kingdomToTrait: this.kingdomToTrait,
      traitToKingdom: this.traitToKingdom 
    };

    // Create 10 kingdom card placeholders for initial loading state
    const kingdomPlaceholders = Array(10).fill(null).map(() => html`
      <div class="card-placeholder"></div>
    `);

    // Create landscape card placeholders, amount depends on landscapeCount
    const landscapePlaceholders = Array(this.landscapeCount).fill(null).map(() => html`
      <div class="card-placeholder landscape-card"></div>
    `);

    return html`
      <!-- Main Kingdom Cards (10 supply piles) -->
      <div class="main-kingdom">
        ${this.showLoadingAnimation 
          ? this.createLoadingCards(10)
          : this.showWhiteTransition
            ? this.createWhiteCards(10)
            : showPlaceholders 
              ? kingdomPlaceholders
              : html`
                  ${this.kingdomDetails?.cards.map(
                    (card: CardResponse) => html`
                    <app-card 
                      .name="${card.name}" 
                      .cost="${card.cost}" 
                      .cardTypes="${card.cardTypes}" 
                      .expansion="${card.expansion}"
                      .assignedTrait="${kingdomToTrait.get(card.id) || ''}">
                    </app-card>`
                  )}
                `
        }
      </div>

      <!-- Landscape Cards Section (Events, Projects, etc) -->
      ${showLandscapeSection ? html`
        <h3>Prophezeiungen, Landmarken, Projekte, Ereignisse & Wege</h3>
        
        <div class="extra-cards">
          ${this.showLoadingAnimation && landscapeCards.length > 0
            ? this.createLoadingCards(landscapeCards.length, true)
            : this.showWhiteTransition && landscapeCards.length > 0
              ? this.createWhiteCards(landscapeCards.length, true)
              : showLandscapePlaceholders 
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
                        .connectedCardName="${card.resourceCategory === 'TRAIT' ? traitToKingdom.get(card.id) || '' : ''}">
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
          ${this.showLoadingAnimation
            ? this.createLoadingCards(gameMaterials.length, gameMaterials.some(card => card.hasLandscapeOrientation))
            : this.showWhiteTransition
              ? this.createWhiteCards(gameMaterials.length, gameMaterials.some(card => card.hasLandscapeOrientation))
              : html`
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
                `
          }
        </div>
      ` : null}
    `;
  }
}

customElements.define("app-kingdom", Kingdom);
