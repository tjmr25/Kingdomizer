import { css } from "lit";

export const cardStyles = css`
    /* ===== Animations ===== */
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

    /* ===== Base Card Styles ===== */
    .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 150px;
        width: 100%;
        
        /* Appearance */
        background-color: white;
        color: var(--color-dark);
        border-radius: 0.5rem;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        font-size: 1rem;
        
        /* Animation */
        opacity: 0;
        transform: translate(20px);
        transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
        animation: fadeIn 0.5s ease-out forwards;
    }
    
    /* Landscape card layout with resource type */
    .card.landscape {
        display: grid;
        grid-template-columns: 10% 80% 10%;
    }
    
    /* Main content container */
    .card-content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    
    /* Grid column positioning for landscape cards */
    .landscape .card-content {
        grid-column: 2;
    }
    
    /* Resource type vertical label */
    .resource-type-vertical {
        grid-column: 1;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        writing-mode: vertical-rl;
        transform: rotate(180deg);
        font-size: 0.75rem;
        font-weight: bold;
        color: var(--color-dark);
        background-color: var(--color-light);
        letter-spacing: 1px;
        text-transform: uppercase;
        border-radius: 0 0.5rem 0.5rem 0;
    }
    
    /* Resource-specific colors for the vertical label */
    .card[resourcecategory="TRAIT"] .resource-type-vertical {
        background-color: var(--color-trait-purple); /* Light purple for traits */
    }

    .card-title {
        font-weight: bold;
    }
    
    /* Purple styling for cards with traits */
    .card-title.has-trait {
        color: #cebfd8;
    }

    .card-expansion {
        font-size: 0.75rem;
        color: var(--color-medium);
    }

    /* ===== Cost Circle ===== */
    .cost-circle {
        width: 30px; 
        height: 30px; 
        background-color: var(--color-gold); 
        border-radius: 50%; 
        box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.3);
        
        /* Text positioning */
        display: flex;
        justify-content: center; 
        align-items: center; 
        font-size: 1.125rem; 
        font-weight: bold; 
        color: var(--color-dark); 
        
        margin-top: 1rem;
    }
    
    /* ===== Connected Card Label ===== */
    .connected-card {
        font-size: 0.75rem;
        margin-top: 1rem;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        color: var(--color-trait-darker-purple);
        max-width: 90%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;
        padding: 0 8px;
        background-color: #f9f5fc;
        border-radius: 0.5rem;
        box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.2);
    }

    /* ===== Card Types ===== */
    .card-types {
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

    /* Type-specific colors */
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
        background-color: var(--color-trait-purple);   
    }
`;