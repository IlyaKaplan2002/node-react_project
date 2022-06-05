import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 153px 20px 70px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 372px 80px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding: 207px 336px;
  }

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

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 40px;
  }

  .fisrtStepWrapper {
    margin-bottom: 20px;

    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      margin-bottom: 24px;
    }
  }

  .secondStepWrapper {
    margin-bottom: 40px;

    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      margin-bottom: 0;
    }
  }

  .reactIcon {
    fill: ${props => props.theme.colors.placeholder};
    margin-right: 12px;
    width: 22px;
    height: 17px;
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

export const Wrapper = styled.div`
  max-width: 280px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    max-width: 608px;
    margin-left: 0;
    margin-right: 0;
  }
`;
