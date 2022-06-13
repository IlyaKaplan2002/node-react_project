import { createGlobalStyle } from 'styled-components';
import { modernNormalize } from 'styled-modern-normalize';

const GlobalStyles = createGlobalStyle`
    ${modernNormalize}

    * {
      box-sizing: border-box;
    }

    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
          'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
          sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: ${props => props.theme.colors.mainBg};
    }

    p {
      margin: 0;
      padding: 0;
    }

    button {
      background: none;
      border: none;
      margin: 0;
      padding: 0;
    }
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    h1, h2, h3 {
      margin: 0;
      padding: 0;
    }
    a {
      text-decoration: none;
    }
    @media screen and (max-width: 428px) {
      ::-webkit-scrollbar {
        display: none;
      }
    
      ::-webkit-scrollbar-track {
        display: none;
      }
    
      ::-webkit-scrollbar-thumb {
        display: none;
      }
    }

    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-thumb {
      background: ${props => props.theme.colors.scrollBar};
    }
`;

export default GlobalStyles;
