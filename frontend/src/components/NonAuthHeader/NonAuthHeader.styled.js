import styled from 'styled-components';

const NonAuthHeaderStyled = styled.header`
  background: ${props => props.theme.colors.mainWhite};
  box-shadow: ${props => props.theme.shadows.header};
  margin: 0 auto;
  padding-top: 16px;
  padding-bottom: 17px;
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding-left: 32px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding-left: 16px;
  }

  .logo {
    margin: 0 auto;
    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      margin-right: auto;
      margin-left: 0;
    }
  }
`;

export default NonAuthHeaderStyled;
