import styled from 'styled-components';

const OverlayStyled = styled.div`
  width: 100vw;
  padding: 16px 20px 20px;
  display: flex;
  justify-content: center;

  .cardsWrapper {
    margin-top: 30px;
  }
`;

const ModalStyled = styled.div`
  width: 280px;
  position: relative;
  padding-top: 52px;

  & svg.back {
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    stroke: ${props => props.theme.colors.mainOrange};

    &:hover {
      cursor: pointer;
      stroke: ${props => props.theme.colors.buttonHoverOrange};
    }
  }
`;

export { ModalStyled, OverlayStyled };
