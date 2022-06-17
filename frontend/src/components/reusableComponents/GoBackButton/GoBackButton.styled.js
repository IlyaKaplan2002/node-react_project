import styled from 'styled-components';

const GoBackButtonStyled = styled.button`
  .icon {
    fill: ${props => props.theme.colors.mainOrange};
    width: 24px;
    height: 12px;

    &:hover {
      cursor: pointer;
      stroke: ${props => props.theme.colors.buttonHoverOrange};
      fill: ${props => props.theme.colors.buttonHoverOrange};
    }
  }
`;

export default GoBackButtonStyled;
