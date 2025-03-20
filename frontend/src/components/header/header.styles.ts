import { css } from "lit";

export const headerStyles = css`
    header {
      height: 10vh; 
      max-height: 80px; 
      background-color: var(--color-blue);
      color: white;
      display: grid;
      grid-template-columns: 40px 1fr 40px;
      width: 75%;
      max-width: 75rem; 
      min-width: 60rem;
      font-size: 1.25rem; 
      text-transform: uppercase;  
      justify-content: center; 
      align-items: center; 
     
    }
    
    .floppy-disk {
      width: 40px; 
      height: 40px; 
      background-color: white;      
      border-radius: 50%; 
      display: none;
      justify-content: center; 
      align-items: center; 
      font-size: 1.5rem; 
      font-weight: bold;  
      margin-top: 0;
      cursor: pointer;
    }
    
    h1 {
      text-align: center;
      margin: 0;
      font-family: Georgia, serif;
    }
    
    h1:hover {
      cursor: pointer;
    }
`;