import styled from 'styled-components';

const LogoStyled = styled.div`
  width: fit-content;
  height: fit-content;
  .link {
    font-family: ${props => props.theme.fonts.families.abril};
    font-weight: ${props => props.theme.fonts.weights.regular};
    font-size: 20px;
    color: ${props => props.theme.colors.mainBlack};
    line-height: 27px;
    text-transform: uppercase;
  }
`;

export default LogoStyled;
