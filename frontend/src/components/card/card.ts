import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { cardStyles } from "./card.styles";

/**
 * Mapping of card type identifiers to their German translations
 */
const typeTranslations: Record<string, string> = {
    ACTION: "Aktion",
    REACTION: "Reaktion",
    VICTORY: "Punkte",
    ATTACK: "Angriff",
    DURATION: "Dauer",
    TREASURE: "Geld",
    COMMAND: "Befehl",
    CURSE: "Fluch",
};

/**
 * Display priority order for card types
 * Lower numbers appear first when multiple types are present
 */
const typeDisplayOrder: Record<string, number> = {
    ACTION: 101,
    COMMAND: 102,
    ATTACK: 103,
    REACTION: 201,
    DURATION: 202,
    TREASURE: 203,
    VICTORY: 204,
    CURSE: 301
};

/**
 * Mapping of expansion identifiers to their German translations
 */
const expansionTranslations: Record<string, string> = {
    BASE: "Basisspiel",
    BASE_1ST: "Basisspiel I",
    BASE_2ND: "Basisspiel II",
    PROSPERITY: "Blütezeit",
    PROSPERITY_1ST: "Blütezeit I",
    PROSPERITY_2ND: "Blütezeit II",
    SEASIDE: "Seaside",
    SEASIDE_1ST: "Seaside I",
    SEASIDE_2ND: "Seaside II",
    PLUNDER: "Plünderer"
};

/**
 * Mapping of resource category identifiers to their German translations
 */
const resourceCategoryTranslations: Record<string, string> = {
    EVENT: "Ereignis",
    TRAIT: "Eigenschaft",
    WAY: "Weg",
    PROJECT: "Projekt",
    ALLY: "Verbündeter",
    LANDMARK: "Landmarke",
    BOON: "Segen",
    FATE: "Schicksal",
    STATE: "Status"
};

/**
 * Card component for displaying Dominion cards
 * 
 * Displays a card with name, expansion, cost, and card types
 */
export class Card extends LitElement {
    /** Name of the card */
    @property() name: string = '';
    
    /** Cost of the card in coins */
    @property() cost: number = -1;
    
    /** Types of the card (ACTION, REACTION, etc.) */
    @property() cardTypes: string[] = [];
    
    /** Expansion the card belongs to */
    @property() expansion: string = '';
    
    /** Resource category (EVENT, TRAIT, etc.) for landscape cards */
    @property() resourceCategory: string = '';
    
    /** Whether the card has landscape orientation */
    @property({ type: Boolean }) hasLandscapeOrientation: boolean = false;
    
    static styles = cardStyles;

    /**
     * Sorts card types according to the predetermined display order
     * @param types - Array of card types to sort
     * @returns Sorted array of card types
     */
    private getOrderedCardTypes(types: string[]): string[] {
        return [...types].sort((a, b) => {
            const orderA = typeDisplayOrder[a] || 999; // Default high number for unknown types
            const orderB = typeDisplayOrder[b] || 999;
            return orderA - orderB;
        });
    }

    render() {
        const localizedExpansion = expansionTranslations[this.expansion] || this.expansion;
        const orderedCardTypes = this.getOrderedCardTypes(this.cardTypes);
        const showResourceCategory = this.hasLandscapeOrientation && 
                                     this.resourceCategory && 
                                     this.resourceCategory !== 'GAMEPART';
        const localizedResourceCategory = resourceCategoryTranslations[this.resourceCategory] || this.resourceCategory;

        return html`
          <div class="card ${showResourceCategory ? 'landscape' : ''}">
            ${showResourceCategory ? html`
                <div class="resource-type-vertical">${localizedResourceCategory}</div>
            ` : null}
            
            <div class="card-content">
              <div class="card-name">
                  <span class="card-title">${this.name}</span>
              </div>
              <div class="card-expansion">${localizedExpansion}</div>
              
              ${this.cost !== null && this.cost >= 0 ? html`
                  <div class="cost-circle">
                      ${this.cost}
                  </div>
              `: null}

              ${this.cardTypes.length > 0 ? html`
                  <div class="card-types">
                      ${orderedCardTypes.map(
                          (type) => html`<span class="type ${type.toLowerCase()}">${typeTranslations[type]}</span>`
                      )}
                  </div>
              `: null}
            </div>
            
            ${showResourceCategory ? html`<div></div>` : null}
          </div>
        `;
    }
}

customElements.define("app-card", Card);