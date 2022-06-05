import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 280px;
  height: 425px;
  transform: translate(-50%, -43%);

  background: ${props => props.theme.colors.mainWhite};
  box-shadow: ${props => props.theme.shadows.header};
  padding: 43px 18px 98px 20px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    transform: translate(-50%, -50%);
    width: 608px;
    height: 272px;
    padding: 40px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    transform: translate(-50%, -95%);
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
