import styled from 'styled-components';

const TrainingStyled = styled.div`
  padding-top: ${props => (props.isCurrent ? '20px' : '54px')};
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
      margin-top: 40px;
      margin-bottom: 40px;
    }
  }
`;

export default TrainingStyled;
