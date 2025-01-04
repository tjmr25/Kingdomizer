import { css } from "lit";

export const kingdomStyles = css`
    .main-kingdom, .extra-cards {
          display: grid;
          grid-template-columns: repeat(5, 1fr); 
          gap: 1rem; 
    }

    h3 {
          color: var(--color-dark);
          margin-top: 3rem;
          margin-bottom: 1rem;
          margin-left: 0rem;
          padding: 0;
    }
`;
