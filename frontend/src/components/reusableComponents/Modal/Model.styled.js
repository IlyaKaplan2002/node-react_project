import styled from 'styled-components';

const OverlayStyled = styled.div`
  top: 0;
  left: 0;
  background-color: ${props => props.theme.colors.backdrop};
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
`;

const ModalStyled = styled.div`
  /* max-width: calc(100% - 48px);
  max-height: calc(100% - 24px); */
`;

export { OverlayStyled, ModalStyled };
