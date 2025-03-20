import { css } from "lit";

export const kingdomStyles = css`
    .main-kingdom {
          display: grid;
          grid-template-columns: repeat(5, 1fr); 
          gap: 1rem;
          min-height: 320px; /* Set fixed height to prevent jumping */
    }

    .extra-cards {
          display: grid;
          grid-template-columns: repeat(20, 1fr); /* Use 20 columns for finer control */
          gap: 1rem;
    }

    /* Normal app-card and placeholders take up 1 column in main kingdom */
    .main-kingdom app-card,
    .main-kingdom .card-placeholder {
          grid-column: span 1;
          height: 150px;
          margin: 0;
          padding: 0;
    }

    /* Normal cards take up 4 of the 20 columns (equivalent to 2 of 10) */
    .extra-cards app-card,
    .extra-cards .card-placeholder {
          grid-column: span 4;
          margin: 0;
          padding: 0;
          height: 150px;
    }

    /* Landscape cards take up 5 of the 20 columns (2.5 of 10) */
    .extra-cards app-card.landscape-card,
    .extra-cards .card-placeholder.landscape-card {
          grid-column: span 5;
          height: 150px;
          margin: 0;
          padding: 0;
    }

    h3 {
          color: var(--color-dark);
          margin-top: 3rem;
          margin-bottom: 1rem;
          margin-left: 0rem;
          padding: 0;
    }

    .card-placeholder {
          background-color: var(--color-light);
          border: 1px solid var(--color-lighter);
          border-radius: 0.5rem;
          height: 150px;
          box-shadow: inset 0 0 8px var(--color-lighter-bluegrey, rgba(0, 0, 0, 0.3));
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-lighter-bluegrey);
          font-size: 1rem;
          text-transform: uppercase;
          box-sizing: border-box;
    }

    .card-placeholder.landscape-card {
          height: 120px;
    }
`;
