import { css } from "lit";

export const cardStyles = css`
        @keyframes fadeIn {
            from {
            opacity: 0; 
            transform: translateY(20px);
            }
            to {
            opacity: 1; 
            transform: translateY(0); 
            }
        }

        .card {
            display: flex;
            flex-direction: column;
            background-color: white;
            color: var(--color-dark);
            border: none;
            border-radius: 0.5rem;
            height: 150px;  
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1rem;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

            opacity: 0;
            transform: translate(20px);
            transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
            animation: fadeIn 0.5s ease-out forwards; /* Dauer des Fade-In */
        }
        
        .card-name {
            
        }

        .circle {
            width: 30px; 
            height: 30px; 
            background-color: var(--color-gold); 
            border-radius: 50%; 
            display: flex;
            justify-content: center; 
            align-items: center; 
            font-size: 1.125rem; 
            font-weight: bold; 
            color: var(--color-dark); 
            margin-top: 1rem;
            margin-bottom: 0rem;
            box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.3); 
        }

        .card-expansion {
            font-size: 0.75rem;
            color: var(--color-medium);
            
        }

        .cardtypes{
            display: flex;
            flex-direction: row;
            width: 100%;
            justify-content: center;
            gap: 0.5rem;
        }
        
        .type {
            background-color: var(--color-light);
            padding: 0.25rem;
            border-radius: 0.25rem;
            font-size: 0.75rem;
            margin-top: 0.5rem;
            transform: translateY(0.5rem);
        }

        .type.reaction {
            background-color: #cbebff;
        }
        .type.victory {
            background-color: #beeca5;
        }
        .type.treasure {
            background-color: khaki;
        }
        .type.duration {
            background-color: #ffb89c;
        }
        .type.curse {
            background-color: #c8a7d7;   
        }

`;