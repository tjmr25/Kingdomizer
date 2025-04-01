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
          box-shadow: inset 0 0 8px rgba(51, 51, 51, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-lighter-bluegrey);
          font-size: 1rem;
          text-transform: uppercase;
          box-sizing: border-box;
          position: relative;
    }

    .card-placeholder.landscape-card {
          height: 150px;
    }

    /* ===== Typography ===== */
    h3 {
          color: var(--color-dark);
          margin: 3rem 0 1rem 0;
          padding: 0;
    }

    /* ===== Loading Animation ===== */
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    .card-loading-spinner {
        width: 24px;
        height: 24px;
        border: 3px solid var(--color-lighter-bluegrey, #e0e6ec);
        border-radius: 50%;
        border-top: 3px solid var(--color-dark);
        animation: spin 1s linear infinite;
    }

    /* ===== Game Materials Placeholders ===== */
    .gamepart-placeholders .card-placeholder {
        grid-column: span 4;
    }
    

`;
