import styled from 'styled-components';

const OverlayStyled = styled.div`
  width: 100vw;
  height: calc(100vh - 60px);
  padding: 16px 20px 200px;
  display: flex;
  justify-content: center;
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
  stroke: ${props =>props.theme.colors.mainOrange};
}
`;


export { ModalStyled, OverlayStyled };
