import { css } from "lit";

export const kingdomStyles = css`
    /* ===== Font Import ===== */
    @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&display=swap');
    
    /* ===== Layout Containers ===== */
    .main-kingdom {
          display: grid;
          grid-template-columns: repeat(5, 1fr); 
          gap: 1rem;
          min-height: 320px; /* Set fixed height to prevent jumping */
          position: relative;
    }

    .extra-cards {
          display: grid;
          grid-template-columns: repeat(20, 1fr); /* Use 20 columns for finer control */
          gap: 1rem;
          position: relative;
    }
    
    /* ===== Loading Animation ===== */
    .loading-card {
          background-color: var(--color-lighter-bluegrey);
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 0.5rem;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          height: 150px;
          position: relative;
          opacity: 0;
          animation: fadeIn 0.4s forwards;
    }
    
    @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
    }
    
    .loading-card::after {
          content: '';
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
          bottom: 0.75rem;
          left: 0.75rem;
          border: 1px solid var(--color-main-bluegrey);
          border-radius: 0.25rem;
    }
    
    .loading-letter {
          font-family: 'Cinzel', serif; /* Same font as header */
          font-size: 3rem;
          font-weight: 700;
          color: var(--color-main-bluegrey);
          z-index: 1;
    }
    
    /* ===== White Transition Cards ===== */
    .white-card {
          background-color: #ffffff;
          border-radius: 0.5rem;
          height: 150px;
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
    .main-kingdom .card-placeholder,
    .main-kingdom .loading-card,
    .main-kingdom .white-card {
          grid-column: span 1;
    }

    .extra-cards app-card,
    .extra-cards .card-placeholder,
    .extra-cards .loading-card,
    .extra-cards .white-card {
          grid-column: span 4;
    }

    .extra-cards app-card.landscape-card,
    .extra-cards .card-placeholder.landscape-card,
    .extra-cards .loading-card.landscape-card,
    .extra-cards .white-card.landscape-card {
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
          height: 150px;
    }

    /* ===== Typography ===== */
    h3 {
          color: var(--color-dark);
          margin: 3rem 0 1rem 0;
          padding: 0;
    }
`;
