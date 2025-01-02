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
    COMMAND: "Befehl"
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
    @property() types: string = '';
    @property() expansion: string = '';
    
    static styles = cardStyles;

    render() {
        const typesArray = this.types ? this.types.split(", ") : [];
        const translatedExpansion = expansionTranslations[this.expansion] || this.expansion;

        return html`
          <div class="card">
            <div class="card-name">
                <span style="font-weight: bold">${this.name}</span>
            </div>
            <div class="card-expansion">${translatedExpansion}</div>
            <div class="circle">
                ${this.cost}
            </div>
            <div class="cardtypes">
                    ${typesArray.map(
                        (type) => html`<span class="type ${type.toLowerCase()}">${typeTranslations[type]}</span>`
                    )}
            </div>
          </div>
        `;
      }
}

customElements.define("app-card", Card);