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

  & + & {
    margin-top: 16px;
  }

  & svg + & svg {
    margin-left: 3px;
  }

  & p {
    margin-bottom: 12px;
  }

  & .resume-card-button{
    font-size: 14px;
    border: none;
    background-color: ${props => props.theme.colors.darkGray};
    color: ${props => props.theme.colors.mainWhite};
    padding: 12px 34px;
    margin-top: 20px;
    margin-left: 20px;
  }
`;

const BookIcon = styled.span`
  position: absolute;
  top: 20px;
  left: 20px;
  color:  ${props => props.reading ? props.theme.colors.mainOrange: props.theme.colors.secondary};
`;

const ListStyled = styled.div`
  list-style: none;
  display: grid;
  row-gap: 14px;
`;

const ListItemStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
`;

const ListItemName = styled.span`
color: ${props => props.theme.colors.secondary};
`;

const RatingIcon = styled.span`
  color:  ${props => props.theme.colors.mainOrange};
`
const CardName = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export {
  CardStyled,
  ListStyled,
  ListItemStyled,
  ListItemName,
  BookIcon,
  RatingIcon,
  CardName,
};
