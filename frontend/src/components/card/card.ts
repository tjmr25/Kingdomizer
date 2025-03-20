import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { cardStyles } from "./card.styles";

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

// Define the display order priority for card types
const typeOrder: Record<string, number> = {
    ACTION: 101,
    COMMAND: 102,
    ATTACK: 103,
    REACTION: 201,
    DURATION: 202,
    TREASURE: 203,
    VICTORY: 204,
    CURSE: 301
    // Add any other card types here with their priority
};

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

export class Card extends LitElement {
    @property() name: string = '';
    @property() cost: number = -1;
    @property() cardTypes: string[] = [];
    @property() expansion: string = '';
    
    static styles = cardStyles;

    /**
     * Sorts card types according to the predetermined order
     */
    private sortCardTypes(types: string[]): string[] {
        return [...types].sort((a, b) => {
            const orderA = typeOrder[a] || 999; // Default high number for unknown types
            const orderB = typeOrder[b] || 999;
            return orderA - orderB;
        });
    }

    render() {
        const translatedExpansion = expansionTranslations[this.expansion] || this.expansion;
        const sortedCardTypes = this.sortCardTypes(this.cardTypes);

        return html`
          <div class="card">

            <div class="card-name">
                <span style="font-weight: bold">${this.name}</span>
            </div>
            <div class="card-expansion">${translatedExpansion}</div>
            
            ${this.cost !== null ? html `<div class="circle">
                ${this.cost}
            </div>`: null}

            ${this.cardTypes.length !== 0 ? html `<div class="cardtypes">
            ${sortedCardTypes.map(
                (type) => html`<span class="type ${type.toLowerCase()}">${typeTranslations[type]}</span>`
            )}
            </div>`: null}          
    
          </div>
        `;
      }
}

customElements.define("app-card", Card);