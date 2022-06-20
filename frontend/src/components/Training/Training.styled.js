import styled from 'styled-components';

const TrainingStyled = styled.div`
  padding-top: ${props => (props.isCurrent ? '40px' : '20px')};
  padding-bottom: 38px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .goalsWrapper {
    margin-bottom: 32px;
  }

  .cardsWrapper {
    margin-bottom: 33px;
  }

  .startButton {
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 32px;
    width: 171px;
    transition: 0.2s linear;

    &:hover {
      transform: translateY(-0.25em);
      background-color: ${props => props.theme.colors.buttonHoverOrange};
    }
  }

  .yearTimer {
    margin-bottom: 24px;
  }

  .goalsTimer {
    margin-bottom: 40px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding-top: 32px;

    .timersWrapper {
      padding-left: 78px;
      padding-right: 78px;
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    .goalsWrapper {
      margin-top: ${props => (props.isCurrent ? '40px' : 0)};
      margin-bottom: 40px;
    }

    .cardsWrapper {
      margin-top: ${props => (props.isCurrent ? 0 : '40px')};
    }
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    .topWrapper {
      width: 100%;
      padding-right: 16px;
      padding-left: 16px;
      display: flex;
      flex-direction: ${props => (props.isCurrent ? 'row' : 'row-reverse')};
      align-items: start;
      justify-content: space-between;
    }

    .timersWrapper {
      padding-left: 137px;
      padding-right: 169px;
    }

    .goalsWrapper {
      margin-top: 0;
    }

    .cardsWrapper {
      margin-top: -120px;
      width: 100%;
      padding-left: 16px;
      display: flex;
      align-items: start;

      & .container {
        width: fit-content;
        margin-left: 0;
      }
    }

    .bottomWrapper {
      display: flex;
      padding-right: 16px;
      justify-content: space-between;
      width: 100%;
    }
  }
`;

export default TrainingStyled;
