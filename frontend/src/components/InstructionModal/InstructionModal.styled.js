import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 153px 20px 70px;

  .back {
    position: absolute;
    top: 84px;
    left: 20px;
  }
`;

export const Modal = styled.div`
  background: ${props => props.theme.colors.mainWhite};
  box-shadow: ${props => props.theme.shadows.header};
  padding: 43px 18px 98px 20px;

  .fisrtStepWrapper {
    margin-bottom: 20px;
  }

  .secondStepWrapper {
    margin-bottom: 40px;
  }

  .button {
    margin-left: auto;
    margin-right: auto;
    font-weight: ${props => props.theme.fonts.weights.medium};
    font-size: 14px;
    padding: 11px 53px;
    line-height: 1.21;

    box-shadow: ${props => props.theme.shadows.instrustion};
  }
`;
