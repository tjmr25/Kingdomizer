import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { kingdomStyles } from "./kingdom.styles";

// Interface for Card
interface Card {
  id: number;
  name: string;
  expansion: string;
  cost: number;
  cardTypes: string[];
  hasPlusAction: boolean;
  hasPlusMultipleActions: boolean;
  hasPlusBuy: boolean;
  hasPlusMultipleDraws: boolean;
  hasTrash: boolean;
  hasCurse: boolean;
}

// Interface for Dependency
interface Dependency {
  id: number;
  name: string;
  expansion: string;
  cost: number;
  resourceCategory: string;
  hasLandscapeOrientation: boolean;
  isLinked: null | boolean;
  cardTypes: string[];
  hasCurse: boolean;
}

// Interface for API Response
interface KingdomResponse {
  cards: Card[];
  dependencies: Dependency[];
}

export class Kingdom extends LitElement {
  @property({ type: Array })
  kingdomCardIds: number[] = [];
  @property({ type: Object })
  kingdomDetails: KingdomResponse | null = null;
 
  static styles = kingdomStyles;

  updated(changedProperties: Map<string | number | symbol, unknown>) {
    if (changedProperties.has('kingdomDetails')) {
      this.getKingdomDetails();
    }
  }

  async getKingdomDetails() {
    if (!this.kingdomCardIds || this.kingdomCardIds.length === 0) {
      console.warn('No kingdomCardIds provided!');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/kingdom/details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.kingdomCardIds),
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.statusText}`);
      }

      const data: KingdomResponse = await response.json();
      this.kingdomDetails = data;
      } catch (error) {
        console.error('Error fetching kingdom cards:', error);
      }
    }

  render() {
    return html`
      <div class="main-kingdom"> 
        ${this.kingdomDetails?.cards.map(
                  (card: Card) => html`
                  <app-card 
                    .name="${card.name}" 
                    .cost="${card.cost}" 
                    .cardTypes="${card.cardTypes}" 
                    expansion="${card.expansion}">
                  </app-card>`
                )}
      </div>
    `;
  }
}

customElements.define("app-kingdom", Kingdom);
