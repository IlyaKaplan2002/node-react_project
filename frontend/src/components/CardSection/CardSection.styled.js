import styled from 'styled-components';

const CardSectionStyled = styled.div`
  width: fit-content;
  margin: 0 auto;

  & + & {
    margin-top: 20px;
    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      margin-top: 40px;
    }
    @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
      margin-top: 32px;
    }
  }
`;

const CardSectionNameStyled = styled.h2`
  font-weight: ${props => props.theme.fonts.weights.semiBold};
  margin-bottom: 20px;
  font-size: 19px;
  line-height: 1.21;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-bottom: 24px;
  }
`;

const CardsItemName = styled.li`
  color: ${props => props.theme.colors.secondary};
  display: inline;
  font-size: 14px;
  font-weight: ${props => props.theme.fonts.weights.medium};
`;

const CardsNameList = styled.ul`
  display: none;
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: inline-grid;
    width: 100%
    color: ${props => props.theme.colors.secondary};
    font-size: 14px;
    font-weight: ${props => props.theme.fonts.weights.medium};
    grid-template-columns: ${props =>
      props.read
        ? '2fr 1.4fr 0.85fr 0.75fr 3.25fr'
        : '2.4fr 1.7fr 0.6fr 0.85fr'};
      margin-bottom: 8px;
      padding-left: 60px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    grid-template-columns: ${props =>
      props.read
        ? '1.6fr 1.45fr 0.65fr 0.7fr 2.1fr'
        : '2.55fr 1.75fr 0.6fr 0.55fr'};
  }
`;

export {
  CardSectionStyled,
  CardSectionNameStyled,
  CardsItemName,
  CardsNameList,
};
