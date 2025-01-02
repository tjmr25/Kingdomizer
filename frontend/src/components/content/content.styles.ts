import { css } from "lit";

export const contentStyles = css`
        .main-content {
          flex: 1; /* Nimmt den verbleibenden Platz ein */
          display: grid;
          grid-template-columns: 80% 20%;
          width: 75%; 
          max-width: 75rem; 
          min-width: 60rem;
          margin: 4rem auto 6rem auto; 
          padding: 2rem;  
        }

        .kindom-display {
          
        }
        
        .expansion-sidebar {
          padding-left: 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .expansion {
          background-color: white;
          border-radius: 8px;
          display: flex; /* Aktiviert Flexbox */
          justify-content: space-between; /* Text links, Checkbox rechts */
          align-items: center; /* Vertikal zentriert */
          transition: transform 0.2s ease-in-out;
          color: var(--color-dark);
          border: 1px solid var(--color-gold)
        }
        
        .expansion:active {
          transform: scale(0.95); /* Leichtes Drücken */
        }

        .expansion-label {
          display: flex;
          padding: 0.75rem 0.75rem;
          justify-content: space-between;
          align-items: center;
          width: 100%; /* Damit das Label den gesamten Bereich einnimmt */
          cursor: pointer; /* Zeigt an, dass das gesamte Element klickbar ist */
          font-size: 0.875rem;
        }

        .button-container {
          display: flex; 
          justify-content: flex-start; 
          align-items: center; 
          margin-bottom: 1rem;
          gap: 1rem; 
        }
        
        button {
          padding: 0.75rem 1.5rem; 
          background-color: var(--color-blue); 
          box-shadow: 0 0.25rem 0.625rem rgba(0, 0, 0, 0.1); 
          color: white; 
          border: none; 
          border-radius: 8px; 
          font-size: 1rem; 
          font-weight: bold; 
          cursor: pointer; 
          transition: background-color 0.3s ease-in-out, transform 0.2s ease-in-out; 
        }
        
        .save-button {
          background-color: var(--color-gold);
        }

        .save-button:hover {
          background-color: #d8c49a;
        }

        button:hover {
          background-color: #7c8d9b; /* Hintergrundfarbe dunkler beim Hover */
        }

        button:active {
          transform: scale(0.95); /* Leichtes "Drücken"-Gefühl beim Klicken */
        }

        .divider {
          border-top: 1px solid var(--color-medium); 
          margin: 2rem 0 2rem; 
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(5, 1fr); 
          gap: 1rem; 
        }

        .card-placeholder {
          background-color: var(--color-light);
          border: 1px solid var(--color-lighter); /* Umriss der Karte */
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

        .checkbox {
          accent-color: var(--color-blue);
        }

        .checkbox:hover {
          cursor: pointer;
        }

        .accordion {
          background-color: white;
          margin-top: 1rem;
        }

        .accordion-header {
          padding: 0.75rem;
          font-size: 0.875rem;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: var(--color-medium);
          gap: 0.5rem;
        }

        .accordion-header:hover {
          text-decoration: underline;
        }

        .accordion-content {
          overflow: hidden;
          max-height: 0; /* Standardmäßig geschlossen */
          transition: max-height 0.1s ease-out;

        }

        .accordion-content.open {
          max-height: 500px;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .icon {
          width: 1.25rem;
          height: 1.25rem;
          margin-left: 0.5rem;
        }

`;