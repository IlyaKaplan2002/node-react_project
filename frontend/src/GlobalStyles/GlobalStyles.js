import { createGlobalStyle } from 'styled-components';
import { modernNormalize } from 'styled-modern-normalize';

const GlobalStyles = createGlobalStyle`
    ${modernNormalize}
`;

export default GlobalStyles;
