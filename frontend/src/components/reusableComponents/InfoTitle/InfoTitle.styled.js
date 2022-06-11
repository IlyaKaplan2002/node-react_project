import styled from 'styled-components';

const Title = styled.h1`
  font-family: ${props => props.theme.fonts.families.abril};
  font-weight: ${props => props.theme.fonts.weights.regular};
  color: ${props => props.theme.colors.mainBlack};
  font-size: 34px;
  line-height: 38px;
  width: fit-content;
  margin: 0 auto;
`;

export default Title;
