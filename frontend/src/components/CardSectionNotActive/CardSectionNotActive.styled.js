import styled from 'styled-components';

const CardSectionStyled = styled.div`
  width: 280px;
  margin: 0 auto;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 704px;
    .booksContainer {
      max-height: 224px;
      overflow-x: hidden;
      overflow-y: scroll;
    }
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    width: 928px;
    border-bottom: 1px solid #e0e5eb;
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
    height: 41px;
    align-items: center;
    border-top: 1px solid #e0e5eb;
    border-bottom: 1px solid #e0e5eb;
    display: inline-grid;
    width: 100%;
    color: ${props => props.theme.colors.secondary};
    font-size: 14px;
    font-weight: ${props => props.theme.fonts.weights.medium};
    grid-template-columns: ${props =>
      props.read
        ? '1.5fr 1.9fr 1.0fr 0.6fr 2.8fr'
        : '1.85fr 2.05fr 0.65fr 0.2fr'};
    margin-bottom: 8px;
    padding-right: 60px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    grid-template-columns: ${props =>
      props.read
        ? '1.5fr 1.8fr 1.1fr 0.8fr 2.8fr'
        : '1.85fr 1.95fr 0.75fr 0.2fr'};
  }
`;

const ListOwerflow = styled.div`
  /* height: 480px;
  overflow: auto;
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    height: 200px;
  } */
`;

export { CardSectionStyled, CardsItemName, CardsNameList, ListOwerflow };
