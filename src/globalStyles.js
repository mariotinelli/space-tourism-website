import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        
    }

    :root {
        // Colors
        --text-color: #D0D6F9;
        --white-color: #FFF;
        --dark-color: #0B0D17;
        --background-menu: rgba(255, 255, 255, 0.04);
        --title-destinations: rgba(255, 255, 255, 0.25);
        --border-color: #383B4B;

        // Fonts
        --font-1: 1.25rem;  // 20px
        --font-2: 1rem;  // 16px
        --font-3: 0.875rem;  // 14px
        --font-4: 3.5rem;  // 56px
        --font-5: 0.9375rem;  // 15px
        --font-6: 1.75rem;  // 28px
        --font-7: 1.5rem;  // 24px
        --font-8: 2rem;  // 32px
        --font-9: 5rem;  // 80px
        --font-10: 9.375rem;  // 150px
        --font-11: 2.5rem;  // 40px
        --font-12: 1.125rem;  // 18px
        --font-13: 6.25rem;  // 100px
    }
`;
 
export default GlobalStyle;