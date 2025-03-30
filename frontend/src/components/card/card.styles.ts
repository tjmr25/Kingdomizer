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
    
    /* Cards with trait assignments */
    .card.has-trait {
        border: none;
        box-shadow: 0 4px 12px rgba(147, 112, 180, 0.7), 0 2px 6px rgba(147, 112, 180, 0.5);
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
        background-color: #e5d5f0; /* Light purple for traits */
    }

    .card-title {
        font-weight: bold;
    }

    .card-expansion {
        font-size: 0.75rem;
        color: var(--color-medium);
    }

    /* ===== Cost Circle ===== */
    .cost-circle {
        width: 30px; 
        height: 30px; 
        background: radial-gradient(circle at 40% 40%, 
                      #f0d090 10%, 
                      #e0ad60 60%, 
                      #f0c070 100%);
        border-radius: 50%; 
        box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.2), 
                    0 2px 4px rgba(0, 0, 0, 0.15);
        border: 1px solid rgba(180, 140, 60, 0.25);
        
        /* Text positioning */
        display: flex;
        justify-content: center; 
        align-items: center; 
        font-size: 1.125rem; 
        font-weight: bold; 
        color: rgba(70, 50, 0, 0.9); 
        
        margin-top: 1rem;
        position: relative;
    }
    
    .cost-circle::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 40%;
        background: linear-gradient(to bottom, 
                    rgba(255, 255, 255, 0.2) 0%, 
                    rgba(255, 255, 255, 0) 100%);
        border-radius: 50% 50% 0 0;
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
        color: #9370b4;
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
    
    .connected-label {
        font-weight: bold;
        margin-right: 0.25rem;
        color: #e5d5f0;
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
        box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.15);
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
        background-color: #c8a7d7;   
    }
`;