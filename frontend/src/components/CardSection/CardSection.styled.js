import styled from 'styled-components';

const CardSectionStyled = styled.div`
  width: 280px;
  margin: 0 auto;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 704px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    width: 1248px;
  }
`;

const CardSectionNameStyled = styled.h2`
  font-weight: ${props => props.theme.fonts.weights.semiBold};
  font-family: ${props => props.theme.fonts.families.montserrat};
  margin-bottom: 20px;
  font-size: 19px;
  color: ${props => props.theme.colors.mainBlack};
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
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: inline-grid;
    width: 100%;
    color: ${props => props.theme.colors.secondary};
    font-size: 14px;
    font-family: ${props => props.theme.fonts.families.montserrat};
    font-weight: ${props => props.theme.fonts.weights.medium};
    grid-template-columns: ${props =>
      props.read
        ? '2.6fr 1.4fr 0.8fr 0.8fr 2.8fr'
        : '2.95fr 1.65fr 0.65fr 0.4fr 0.5fr'};
    margin-bottom: 8px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    grid-template-columns: ${props =>
      props.read
        ? '1.9fr 1.53fr 0.6fr 0.8fr 1.9fr'
        : '2.85fr 1.8fr 0.6fr 0.45fr'};
  }
`;

export {
  CardSectionStyled,
  CardSectionNameStyled,
  CardsItemName,
  CardsNameList,
};
