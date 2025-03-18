import { css } from "lit";

export const kingdomStyles = css`
    .main-kingdom, .extra-cards {
          display: grid;
          grid-template-columns: repeat(5, 1fr); 
          gap: 1rem; 
    }

    /* Style for landscape-oriented cards */
    .landscape-card {
          grid-column: span 2; /* Make landscape cards span 2 columns */
    }

    /* When a landscape card is at the end of a row, we need to handle wrapping */
    .extra-cards {
          display: grid;
          grid-template-columns: repeat(10, 1fr); /* Use 10 columns for more flexibility */
          gap: 1rem;
    }

    /* Normal cards take up 2 of the 10 columns */
    .extra-cards app-card {
          grid-column: span 2;
    }

    /* Landscape cards take up 3 of the 10 columns (1.5x wider) */
    .extra-cards app-card.landscape-card {
          grid-column: span 3;
    }

    h3 {
          color: var(--color-dark);
          margin-top: 3rem;
          margin-bottom: 1rem;
          margin-left: 0rem;
          padding: 0;
    }
`;
