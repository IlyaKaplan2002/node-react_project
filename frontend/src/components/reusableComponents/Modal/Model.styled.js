import styled from 'styled-components';

const OverlayStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1200;
`;

const ModalStyled = styled.div`
  max-width: calc(100% - 48px);
  max-height: calc(100% - 24px);
`;

export { OverlayStyled, ModalStyled };
