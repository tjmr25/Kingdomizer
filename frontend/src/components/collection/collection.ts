import { html, css, LitElement } from "lit";

export class Collection extends LitElement {    

    static styles = css`
    `;

    render() {
        return html`
            <h2>COLLECTION</h2>
        `;
      }
}

customElements.define("app-collection", Collection);