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

      --color-blue: #475c6c;
      --color-grey: #8a8583;
      --color-brown: #cd8b62;
      --color-lightbeige: #f7efd3;
      --color-darkbeige: #eed7a1;
      --color-gold: #cfa959;
    }
      
    main {
      flex: 1;
    }

    app-header{
      display: flex;
      justify-content: center;
      aling-items: center;
      background-color: var(--color-blue);

    }
`;