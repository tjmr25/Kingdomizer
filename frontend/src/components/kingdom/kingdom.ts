import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { kingdomStyles } from "./kingdom.styles";
import { 
  CardResponse, 
  DependencyResponse, 
  KingdomDetailsResponse,
  KingdomDetailsRequest,
  CardResourceCategory
} from "../../types";

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
  landscapeIds: number[] = []; // Landscape card IDs (events, ways, projects)
  
  @property({ type: Number })
  landscapeCount: number = 2; // Number of landscape cards to show in placeholders
  
  @property({ type: Object })
  kingdomDetails: KingdomDetailsResponse | null = null; // Full card data from API
  
  @property({ type: Boolean })
  isLoading: boolean = false; // Tracks API request loading state
  
  @property({ type: Boolean })
  hasShownKingdom: boolean = false; // Tracks if kingdom has been displayed before
 
  static styles = kingdomStyles;

  /**
   * Lifecycle method that triggers when properties change
   */
  updated(changedProperties: Map<string | number | symbol, unknown>) {
    // Fetch card details when IDs change
    if (changedProperties.has('kingdomCardIds') || changedProperties.has('landscapeIds')) {
      this.fetchKingdomDetails();
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
        (!this.landscapeIds || this.landscapeIds.length === 0)) {
      console.warn('No cards to display!');
      return;
    }

    try {
      this.isLoading = true;
      
      // Prepare request data
      const requestData: KingdomDetailsRequest = {
        kingdomCardIds: this.kingdomCardIds || [],
        landscape: this.landscapeIds || []
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
        throw new Error(`Failed to fetch: ${response.statusText}`);
      }

      const data: KingdomDetailsResponse = await response.json();
      this.kingdomDetails = data;
      this.isLoading = false;
    } catch (error) {
      console.error('Error fetching kingdom cards:', error);
      this.isLoading = false;
    }
  }

  /**
   * Filters and returns additional game materials (non-landscape dependencies)
   */
  private filterGameMaterials() {
    return this.kingdomDetails?.dependencies.filter(dependency => 
      ['KINGDOM_CARD', 'EXTRA_CARD', 'GAMEPART'].includes(dependency.resourceCategory)
    ) || [];
  }

  /**
   * Filters and returns landscape cards (events, projects, etc)
   */
  private filterLandscapeCards() {
    return this.kingdomDetails?.dependencies.filter(dependency => 
      !['KINGDOM_CARD', 'EXTRA_CARD', 'GAMEPART'].includes(dependency.resourceCategory)
    ) || [];
  }

  /**
   * Determines whether to show placeholders instead of actual cards
   */
  private shouldShowPlaceholders() {
    // Only show placeholders if we've never shown a kingdom before
    return (!this.hasShownKingdom && !this.kingdomDetails) || 
           (!this.hasShownKingdom && (!this.kingdomCardIds || this.kingdomCardIds.length === 0));
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
    const gameMaterials = this.filterGameMaterials();
    const landscapeCards = this.filterLandscapeCards();
    const hasLandscapeCards = !showPlaceholders && landscapeCards.length > 0;
    const showLandscapeSection = showLandscapePlaceholders || hasLandscapeCards;
    const showGameMaterialSection = !showPlaceholders && gameMaterials.length > 0;

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
        ${showPlaceholders 
          ? kingdomPlaceholders
          : html`
              ${this.kingdomDetails?.cards.map(
                (card: CardResponse) => html`
                <app-card 
                  .name="${card.name}" 
                  .cost="${card.cost}" 
                  .cardTypes="${card.cardTypes}" 
                  .expansion="${card.expansion}">
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
                    .expansion="${card.expansion}">
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
              .expansion="${card.expansion}">
            </app-card>`
          )}
        </div>
      ` : null}
    `;
  }
}

customElements.define("app-kingdom", Kingdom);
