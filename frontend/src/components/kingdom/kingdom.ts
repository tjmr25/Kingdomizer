/*import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { Card as CardType } from "../card/card";

export class Kingdom extends LitElement {
  @property({ type: Array }) cards: CardType[] = [];

  static styles = css`
    .cards {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 1rem;
    }
    .card-placeholder {
      background-color: var(--color-light);
      border: 1px solid var(--color-lighter);
      border-radius: 0.5rem;
      height: 150px;
      box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-darker);
      font-size: 1rem;
      text-transform: uppercase;
    }
  `;

  render() {
    return html`
      <div class="cards">
        ${this.cards.length === 0
          ? Array(10)
              .fill(null)
              .map(() => html`<div class="card-placeholder">Platzhalter</div>`)
          : this.cards.map(
              (card) => html`<app-card
                name="${card.name}"
                cost="${card.cost}"
                types="${card.types.join(", ")}"
                expansion="${card.expansion}"
              ></app-card>`
            )}
      </div>
    `;
  }
}

customElements.define("app-kingdom", Kingdom);
*/