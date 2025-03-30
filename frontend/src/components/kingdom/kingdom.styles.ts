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
          background-color: white;
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
          position: relative;
    }

    .card-placeholder::before {
          content: "♚";
          font-size: 3rem;
          font-weight: normal;
          color: var(--color-main-bluegrey, #6d8ca0);
          text-shadow: 0 1px 1px rgba(255, 255, 255, 0.8), 0 -1px 1px rgba(0, 0, 0, 0.2);
          opacity: 0.15;
    }
    
    .card-placeholder.landscape-card::before {
          content: "⛨"; 
          font-size: 2.25rem;
          color: var(--color-main-bluegrey, #6d8ca0);
          text-shadow: 0 1px 1px rgba(255, 255, 255, 0.8), 0 -1px 1px rgba(0, 0, 0, 0.2);
          opacity: 0.15;
    }

    .card-placeholder.loading::before {
          display: none;
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
    
    .card-placeholder.loading {
        position: relative;
        background-color: white;
    }
    
    .card-loading-spinner {
        width: 24px;
        height: 24px;
        border: 3px solid var(--color-lighter-bluegrey, #e0e6ec);
        border-radius: 50%;
        border-top: 3px solid var(--color-main-bluegrey, #6d8ca0);
        animation: spin 1s linear infinite;

    }

    /* ===== Game Materials Placeholders ===== */
    .gamepart-placeholders .card-placeholder {
        grid-column: span 4;
    }
    
    .gamepart-placeholders .card-placeholder::before {
        content: "⛨";  /* Shield symbol, same as landscape cards */
        font-size: 2.25rem;
        color: var(--color-main-bluegrey, #6d8ca0);
        text-shadow: 0 1px 1px rgba(255, 255, 255, 0.8), 0 -1px 1px rgba(0, 0, 0, 0.2);
        opacity: 0.8;
    }
`;
