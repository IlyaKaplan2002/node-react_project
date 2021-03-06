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
    &.active .icon {
      fill: ${props => props.theme.colors.mainOrange};
    }

    &:hover .icon,
    &:focus .icon {
      fill: ${props => props.theme.colors.mainOrange};
      transition: 0.2s linear;
    }
  }
  .icon {
    display: block;
    margin: auto;
    align-items: center;
    fill: ${props => props.theme.colors.placeholder};
  }
`;
