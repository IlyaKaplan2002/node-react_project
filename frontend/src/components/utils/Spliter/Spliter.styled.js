import styled from 'styled-components';

export const SpliterStyled = styled.div`
height: 1px;
border-bottom: 1px solid #E0E5EB;
@media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    display:none;
  }
`;