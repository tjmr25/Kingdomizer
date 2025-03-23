import { css } from "lit";

export const kingdomStyles = css`
    /* ===== Layout Containers ===== */
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

    /* ===== Card Styles ===== */
    /* Base card styles */
    .main-kingdom app-card,
    .main-kingdom .card-placeholder,
    .extra-cards app-card,
    .extra-cards .card-placeholder {
          height: 150px;
          margin: 0;
          padding: 0;
    }

    /* Grid column spans */
    .main-kingdom app-card,
    .main-kingdom .card-placeholder {
          grid-column: span 1;
    }

    .extra-cards app-card,
    .extra-cards .card-placeholder {
          grid-column: span 4;
    }

    .extra-cards app-card.landscape-card,
    .extra-cards .card-placeholder.landscape-card {
          grid-column: span 5;
    }

    /* ===== Placeholder Styles ===== */
    .card-placeholder {
          background-color: var(--color-light);
          border: 1px solid var(--color-lighter);
          border-radius: 0.5rem;
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

    /* ===== Typography ===== */
    h3 {
          color: var(--color-dark);
          margin: 3rem 0 1rem 0;
          padding: 0;
    }
`;
