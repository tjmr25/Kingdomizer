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
  
  @property({ type: Object })
  kingdomDetails: KingdomDetailsResponse | null = null;
 
  static styles = kingdomStyles;

  updated(changedProperties: Map<string | number | symbol, unknown>) {
    if (changedProperties.has('kingdomCardIds') || changedProperties.has('landscapeIds')) {
      this.getKingdomDetails();
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
    } catch (error) {
      console.error('Error fetching kingdom cards:', error);
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

  render() {
    const gameMaterialDeps = this.getGameMaterialDependencies();
    const landscapeDeps = this.getLandscapeDependencies();

    return html`
      <div class="main-kingdom"> 
        ${this.kingdomDetails?.cards.map(
          (card: ResponseCard) => html`
          <app-card 
            .name="${card.name}" 
            .cost="${card.cost}" 
            .cardTypes="${card.cardTypes}" 
            .expansion="${card.expansion}">
          </app-card>`
        )}
      </div>

      ${landscapeDeps.length > 0 ? html`
        <h3>Prophezeiungen, Landmarken, Projekte, Events & Wege</h3>
        <div class="extra-cards">
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
        </div>
      ` : null}

      ${gameMaterialDeps.length > 0 ? html`
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
