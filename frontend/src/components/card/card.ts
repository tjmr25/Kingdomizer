import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";

export class Card extends LitElement {
    @property() name: string = '';
    @property() cost: number = -1;

    static styles = css`
        @keyframes fadeIn {
            from {
            opacity: 0; /* Unsichtbar */
            transform: translateY(20px); /* Start leicht nach unten verschoben */
            }
            to {
            opacity: 1; /* Voll sichtbar */
            transform: translateY(0); /* Zur Originalposition */
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
            margin-top: 15%;
        }

        .circle {
            width: 30px; /* Breite des Kreises */
            height: 30px; /* Höhe des Kreises */
            background-color: var(--color-light); 
            border: 1px solid var(--color-lighter);
            border-radius: 50%; /* Macht den Kreis rund */
            display: flex;
            justify-content: center; /* Horizontal zentrieren */
            align-items: center; /* Vertikal zentrieren */
            font-size: 1rem; /* Schriftgröße */
            font-weight: bold; /* Fettdruck */
            color: var(--color-dark); 
            margin-top: 0%
        }

        .cardtype {
            background-color: var(--color-light);
            padding: 0.25rem;
            border-radius: 0.25rem;
            font-size: 0.75rem;
            margin-bottom: 5%;
        }
    `;

    render() {
        return html`
          <div class="card">
            <div class="card-name">
                <span style="font-weight: bold">${this.name}</span>
            </div>
            <div class="circle">
                ${this.cost}
            </div>
            <div class="cardtype">
                Aktion
            </div>
          </div>
        `;
      }
}

customElements.define("app-card", Card);