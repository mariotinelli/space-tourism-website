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

        // Fonts
        --font-1: 1.25rem;  // 20px
    }
`;
 
export default GlobalStyle;