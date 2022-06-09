import styled from 'styled-components';

export const WrapperStyled = styled.div`
  .backdrop {
    position: fixed;
    left: 0;
    top: 0px;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      top: 150px;
    }

    @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
      top: -30px;
    }
  }
`;

export const Wrapper = styled.div`
  width: 280px;
  height: 425px;

  background: ${props => props.theme.colors.mainWhite};
  box-shadow: ${props => props.theme.shadows.header};
  padding: 43px 18px 98px 20px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 608px;
    height: 272px;
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
