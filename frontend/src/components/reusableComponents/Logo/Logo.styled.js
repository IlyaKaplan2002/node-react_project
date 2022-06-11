import styled from 'styled-components';

const LogoStyled = styled.div`
  font-family: ${props => props.theme.fonts.families.abril};
  font-weight: ${props => props.theme.fonts.weights.regular};
  font-size: 20px;
  line-height: 27px;
  text-transform: uppercase;
  color: ${props => props.theme.colors.black};
  width: fit-content;
  height: fit-content;
`;

export default LogoStyled;
