import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";

const typeTranslations: Record<string, string> = {
    ACTION: "Aktion",
    REACTION: "Reaktion",
    VICTORY: "Punkte",
    ATTACK: "Angriff",
    DURATION: "Dauer",
    TREASURE: "Geld",
};

const expansionTranslations: Record<string, string> = {
    BASE_2ND: "Basisspiel II",
    PROSPERITY_2ND: "Blütezeit II",
    SEASIDE_2ND: "Seaside II",
};

export class Card extends LitElement {
    @property() name: string = '';
    @property() cost: number = -1;
    @property() types: string = '';
    @property() expansion: string = '';
    

    static styles = css`
        @keyframes fadeIn {
            from {
            opacity: 0; 
            transform: translateY(20px);
            }
            to {
            opacity: 1; 
            transform: translateY(0); 
            }
        }

        .card {
            display: flex;
            flex-direction: column;
            background-color: white;
            color: var(--color-darker);
            border: none;
            border-radius: 0.5rem;
            height: 150px;  
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-size: 1rem;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

            opacity: 0;
            transform: translate(20px);
            transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
            animation: fadeIn 0.5s ease-out forwards; /* Dauer des Fade-In */
        }
        
        .card-name {
            margin-top: 1.5rem;
        }

        .circle {
            width: 30px; 
            height: 30px; 
            background-color: var(--color-gold); 
            border-radius: 50%; 
            display: flex;
            justify-content: center; 
            align-items: center; 
            font-size: 1.125rem; 
            font-weight: bold; 
            color: var(--color-dark); 
            margin-top: 0.75rem;
            margin-bottom: 0.75rem;
            box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.3); 
        }

        .card-expansion {
            font-size: 0.75rem;
            color: var(--color-medium);
            
        }

        .cardtypes{
            display: flex;
            flex-direction: row;
            width: 100%;
            justify-content: center;
            gap: 0.5rem;
        }
        
        .type {
            background-color: var(--color-light);
            padding: 0.25rem;
            border-radius: 0.25rem;
            font-size: 0.75rem;
            margin-bottom: 5%;

        }

        .type.reaction {
            background-color: #cbebff;
        }
        .type.victory {
            background-color: #beeca5;
        }
        .type.treasure {
            background-color: khaki;
        }
        .type.duration {
            background-color: #ffb89c;
        }
        
    `;

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