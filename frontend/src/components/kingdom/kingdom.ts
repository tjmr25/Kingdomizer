import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { kingdomStyles } from "./kingdom.styles";
import { Card } from "../card/card";


export class Kingdom extends LitElement {
  @property({ type: Array }) fetchedCards:Card[] = [];

  static styles = kingdomStyles;

  render() {
    return html`
      <div class="cards">
        ${this.fetchedCards.length === 0 ? Array(10)
            .fill(null)
            .map(() => html`<div class="card-placeholder"></div>`)
        : this.fetchedCards.map(
            (fetchedCard) => html`
            <app-card 
              .name="${fetchedCard.name}" 
              .cost="${fetchedCard.cost}" 
              .cardTypes="${fetchedCard.cardTypes}" 
              .expansion="${fetchedCard.expansion}">
            </app-card>`
          )}
      </div>
    `;
  }
}

customElements.define("app-kingdom", Kingdom);
