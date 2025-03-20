import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { kingdomStyles } from "./kingdom.styles";
import { 
  ResponseCard, 
  ResponseDependency, 
  KingdomDetailsResponse
} from "./kingdom.types";

export class Kingdom extends LitElement {
  @property({ type: Array })
  kingdomCardIds: number[] = [];
  
  @property({ type: Array })
  landscapeIds: number[] = [];
  
  @property({ type: Number })
  landscapeCount: number = 2;
  
  @property({ type: Object })
  kingdomDetails: KingdomDetailsResponse | null = null;
  
  @property({ type: Boolean })
  isLoading: boolean = false;
  
  @property({ type: Boolean })
  hasShownKingdom: boolean = false;
 
  static styles = kingdomStyles;

  updated(changedProperties: Map<string | number | symbol, unknown>) {
    if (changedProperties.has('kingdomCardIds') || changedProperties.has('landscapeIds')) {
      this.getKingdomDetails();
    }
    
    // Set hasShownKingdom to true once we've successfully displayed cards
    if (this.kingdomDetails && this.kingdomDetails.cards && this.kingdomDetails.cards.length > 0) {
      this.hasShownKingdom = true;
    }
  }

  async getKingdomDetails() {
    // Only proceed if we have at least one of kingdomCardIds or landscapeIds
    if ((!this.kingdomCardIds || this.kingdomCardIds.length === 0) && 
        (!this.landscapeIds || this.landscapeIds.length === 0)) {
      console.warn('No cards to display!');
      return;
    }

    try {
      this.isLoading = true;
      
      // Always use a single endpoint with a consistent format
      const requestData = {
        kingdomCardIds: this.kingdomCardIds || [],
        landscape: this.landscapeIds || []
      };
      
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

  // Helper methods to filter dependencies
  private getGameMaterialDependencies() {
    return this.kingdomDetails?.dependencies.filter(dep => 
      ['KINGDOM_CARD', 'EXTRA_CARD', 'GAMEPART'].includes(dep.resourceCategory)
    ) || [];
  }

  private getLandscapeDependencies() {
    return this.kingdomDetails?.dependencies.filter(dep => 
      !['KINGDOM_CARD', 'EXTRA_CARD', 'GAMEPART'].includes(dep.resourceCategory)
    ) || [];
  }

  private shouldShowPlaceholders() {
    // Only show placeholders if we've never shown a kingdom before OR 
    // we're loading for the first time (no previous kingdom)
    return (!this.hasShownKingdom && !this.kingdomDetails) || 
           (!this.hasShownKingdom && (!this.kingdomCardIds || this.kingdomCardIds.length === 0));
  }

  private shouldShowLandscapePlaceholders() {
    return this.shouldShowPlaceholders() && this.landscapeCount > 0;
  }

  render() {
    const showPlaceholders = this.shouldShowPlaceholders();
    const showLandscapePlaceholders = this.shouldShowLandscapePlaceholders();
    const gameMaterialDeps = this.getGameMaterialDependencies();
    const landscapeDeps = this.getLandscapeDependencies();
    const hasLandscapeCards = !showPlaceholders && landscapeDeps.length > 0;
    const showLandscapeSection = showLandscapePlaceholders || hasLandscapeCards;
    const showGameMaterialSection = !showPlaceholders && gameMaterialDeps.length > 0;

    // Create an array of 10 placeholders for the main kingdom
    const kingdomPlaceholders = Array(10).fill(null).map(() => html`
      <div class="card-placeholder"></div>
    `);

    // Create an array of landscape placeholders based on the count
    const landscapePlaceholders = Array(this.landscapeCount).fill(null).map(() => html`
      <div class="card-placeholder landscape-card"></div>
    `);

    return html`
      <div class="main-kingdom">
        ${showPlaceholders 
          ? kingdomPlaceholders
          : html`
              ${this.kingdomDetails?.cards.map(
                (card: ResponseCard) => html`
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

      ${showLandscapeSection ? html`
        <h3>Prophezeiungen, Landmarken, Projekte, Ereignisse & Wege</h3>
        
        <div class="extra-cards">
          ${showLandscapePlaceholders 
            ? landscapePlaceholders
            : html`
                ${landscapeDeps.map(
                  (card: ResponseDependency) => html`
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

      ${showGameMaterialSection ? html`
        <h3>Zusatzkarten & Spielmaterial</h3>
        <div class="extra-cards">
          ${gameMaterialDeps.map(
            (card: ResponseDependency) => html`
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
