import { css } from "lit";

export const appStyles = css`
    :host {
      font-size: 16px;
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      font-family: Roboto, sans-serif;
      background-color: white;

      --color-dark: #333;      /* Dunkelste Farbe */
      --color-darker: #666;    /* Etwas heller als dark */
      --color-medium: #aaa;    /* Mittlere Graustufe */
      --color-lighter: #ccc;   /* Etwas dunkler als light */
      --color-light: #eee;     /* Hellste Farbe */

      --color-main-bluegrey: #475c6c;
      --color-lighter-bluegrey: #92a6b5;
      --color-very-light-bluegrey: #f5f8fb;
      --color-very-light-bluegrey-border: #e0e6ec;

      --color-trait-purple: #e5d5f0;
      --color-trait-darker-purple: #a095a8;

      --color-gold: #cfa959;
    }

      
    main {
      flex: 1;
    }

    app-header{
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--color-main-bluegrey);

    }
      
    app-footer {
      display: block;
      width: 100%;
      margin-top: auto; /* Ensures footer stays at bottom when content is short */
    }
`;