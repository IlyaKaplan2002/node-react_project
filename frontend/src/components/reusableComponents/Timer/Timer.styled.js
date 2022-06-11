import styled from 'styled-components';

export const TimerWrapper = styled.div`
  text-align: center;
  max-width: 280px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    max-width: 290px;
  }

  .title {
    font-family: ${props => props.theme.fonts.families.montserrat};
    font-weight: ${props => props.theme.fonts.weights.medium};
    font-size: 14px;
    line-height: 1.21;
    margin-bottom: 8px;
    color: ${props => props.theme.colors.secondary};
  }

  .container {
    background-color: ${props => props.theme.colors.mainWhite};
    box-shadow: ${props => props.theme.shadows.goals};
    display: flex;
    justify-content: center;
    padding: 1px 33px 8px;

    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      padding-left: 38px;
      padding-right: 38px;
    }
  }

  .field {
    display: flex;
    flex-direction: column;
    margin-right: 10px;
  }

  .value {
    font-family: ${props => props.theme.fonts.families.sans};
    font-weight: ${props => props.theme.fonts.weights.bold};
    font-size: 25px;
    line-height: 1.52;
    margin-bottom: 1px;
    color: ${props => props.theme.colors.timer};
  }

  .label {
    font-family: ${props => props.theme.fonts.families.montserrat};
    font-weight: ${props => props.theme.fonts.weights.medium};
    font-size: 10px;
    line-height: 1.2;
    color: ${props => props.theme.colors.secondary};
  }

  .puncMark {
    font-family: ${props => props.theme.fonts.families.sans};
    font-weight: ${props => props.theme.fonts.weights.bold};
    font-size: 25px;
    line-height: 1.52;
    margin-right: 10px;
    color: ${props => props.theme.colors.timer};
    margin-bottom: 1px;
  }
`;
