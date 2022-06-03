import styled from 'styled-components';

const NonAuthHeaderStyled = styled.header`
  background: ${props => props.theme.colors.mainWhite};
  box-shadow: ${props => props.theme.shadows.header};
  width: 100vw;
  padding-top: 16px;
  padding-bottom: 17px;

  .logo {
    margin: 0 auto;
  }
`;

export default NonAuthHeaderStyled;
