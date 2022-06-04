import styled from 'styled-components';

const NonAuthHeaderStyled = styled.header`
  background: ${props => props.theme.colors.mainWhite};
  box-shadow: ${props => props.theme.shadows.header};
  margin: 0 auto;
  padding-top: 16px;
  padding-bottom: 17px;

  .logo {
    margin: 0 auto;
  }
`;

export default NonAuthHeaderStyled;
