import styled from 'styled-components';

const AppBarContainer = styled.header`
  min-width: 320px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${props => props.theme.colors.mainWhite};
  box-shadow: ${props => props.theme.shadows.header};
  padding: 14px 20px 13px;
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 16px 32px 17px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding: 16px 16px 17px;
  }

  .containerNavMob {
    display: flex;
  }
  .containerNavTablDesc {
    display: flex;
  }
`;

export default AppBarContainer;
