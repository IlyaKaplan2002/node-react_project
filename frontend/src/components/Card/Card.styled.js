import styled from 'styled-components';

const CardStyled = styled.div`
  position: relative;
  padding: 20px 20px 30px 54px;
  margin: 0 auto;
  width: 100%;
  max-width: 280px;
  font-size: 12px;
  font-family: ${props => props.theme.fonts.families.montserrat};
  font-weight: ${props => props.theme.fonts.weights.medium};
  line-height: 1.25;
  background-color: ${props => props.theme.colors.mainWhite};
  color: ${props => props.theme.colors.mainBlack};
  box-shadow: ${props => props.theme.shadows.header};
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: inline-grid;
    grid-template-columns: ${props =>
      props.read ? '1.2fr 3fr 0.2fr' : '1fr 1.15fr'};
    column-gap: 30px;
    padding: 14px 20px 14px 60px;
  }
  & + & {
    margin-top: 16px;
    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      margin-top: 8px;
    }
  }

  & svg + & svg {
    margin-left: 3px;
    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      margin-left: 4px;
    }
  }

  & .resume-card-button {
    font-size: 14px;
    border: none;
    background-color: ${props => props.theme.colors.darkGray};
    color: ${props => props.theme.colors.mainWhite};
    padding: 12px 34px;
    text-align: center;
    margin-top: 20px;
    margin-left: 20px;

    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      margin: 0;
      padding: 12px 0;
      height: fit-content;
      width: 80px;
    }
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 14px;
    max-width: 704px;
  }
`;

const BookIcon = styled.span`
  position: absolute;
  top: 20px;
  left: 20px;
  color: ${props =>
    props.reading
      ? props.theme.colors.mainOrange
      : props.theme.colors.secondary};
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    top: 50%;
    transform: translateY(-50%);
  }
`;

const ListStyled = styled.div`
  list-style: none;
  display: grid;
  row-gap: 14px;
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: inline-grid;
    grid-template-columns: ${props =>
      props.read ? '1fr  0.5fr 0.2fr 1fr' : '2fr 0.5fr 0.2fr'};
    column-gap: 30px;
  }
`;

const ListItemStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
    align-self: center;
  }
`;

const ListItemName = styled.span`
  color: ${props => props.theme.colors.secondary};
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const RatingIcon = styled.span`
  color: ${props => props.theme.colors.mainOrange};
`;
const CardName = styled.p`
  overflow: hidden;
  margin-bottom: 12px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin: 0px;
    max-height: 34px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`;

const CardNameWrapper = styled.div`
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
    align-items: center;
  }
`;

export {
  CardStyled,
  ListStyled,
  ListItemStyled,
  ListItemName,
  BookIcon,
  RatingIcon,
  CardName,
  CardNameWrapper
};