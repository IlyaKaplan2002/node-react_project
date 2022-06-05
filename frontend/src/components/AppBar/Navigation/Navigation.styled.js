import styled from 'styled-components';

export const NavigationStyled = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  border-right: 1px #a6abb9 solid;
  .link {
    width: 33px;
    height: 33px;
    display: flex;
    margin: 0 auto;
    text-align: center;
    margin-right: 8px;
    &.active {
      background: ${props => props.theme.colors.iconActiveBg};
      border-radius: 50%;
    }
  }
  .icon {
    display: block;
    margin: auto;
    align-items: center;
    fill: ${props => props.theme.colors.placeholder};
  }
`;
