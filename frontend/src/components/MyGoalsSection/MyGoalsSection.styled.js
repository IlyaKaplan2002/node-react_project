import styled from 'styled-components';

const GoalsSectionStyled = styled.div`
  background-color: white;
  width: 100%;
  width: 280px;
  box-shadow: ${props => props.theme.shadows.header};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
    justify-content: space-between;
    max-width: 704px;
    padding: 20px 42px 28px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    display: block;
    max-width: 288px;
    padding: 0;
  }

  .goals-button {
    width: 100%;
    padding: 18px 0;

    font-weight: 600;
    font-size: 20px;
    line-height: 1.2;

    background-color: ${({ theme, active }) =>
      active ? theme.colors.mainOrange : theme.colors.darkGray};
    color: ${props => props.theme.colors.mainWhite};
    border: none;

    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      width: 275px;
      height: fit-content;
      margin: auto 0;
    }

    @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
      width: 100%;
    }
  }
`;

const GoalsCardWrapperStyled = styled.div`
  width: 100%;
  display: flex;
  padding: 44px 30px;
  justify-content: space-between;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: ${props => (props.active ? '324px' : '240px')};
    padding: 0;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    width: 100%;
    padding: 48px 34px;
  }
`;

const GoalsAmount = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: ${props => (props.active ? '63px' : '100px')};

  font-family: ${props => props.theme.fonts.families.montserrat};
  font-size: ${props => (props.active ? '11px' : '14px')};
  line-height: ${props => (props.active ? '1.18' : '1.21')};
  font-weight: ${props => props.theme.fonts.weights.medium};

  color: ${props => props.theme.colors.secondary};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 100px;

    font-size: 11px;
    line-height: 1.18;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    width: ${props => (props.active ? '66px' : '100px')};

    font-size: ${props => (props.active ? '12px' : '14px')};
    line-height: ${props => (props.active ? '1.25' : '1.21')};
  }
`;

const GoalsAmountCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: ${props => (props.active ? '63px' : '100px')};
  margin-bottom: ${props => (props.active ? '8px' : '14px')};

  background-color: ${props => props.theme.colors.iconActiveBg};
  color: ${props => props.theme.colors.mainBlack};
  box-shadow: ${props => props.theme.shadows.goals};

  font-family: ${props => props.theme.fonts.families.sans};
  font-weight: ${props => props.theme.fonts.weights.bold};
  font-size: ${props => (props.active ? '35px' : '45px')};
  line-height: ${props => (props.active ? '1.09' : '0.84')};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    height: 60px;
    margin-bottom: 4px;

    font-size: 40px;
    line-height: 0.95;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    height: ${props => (props.active ? '66px' : '100px')};
    font-size: ${props => (props.active ? '36px' : '45px')};
    line-height: ${props => (props.active ? '1.06' : '0.84')};
  }

  &.orange {
    color: ${props => props.theme.colors.mainOrange};
  }
`;

export {
  GoalsSectionStyled,
  GoalsCardWrapperStyled,
  GoalsAmount,
  GoalsAmountCard,
};
