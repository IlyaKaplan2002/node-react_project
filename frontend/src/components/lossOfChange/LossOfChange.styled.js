import styled from 'styled-components';

const ArticleStyled = styled.article`
  width: 280px;
  height: 220px;
  margin: 0 auto;
  font-size: 16px;
  font-family: ${props => props.theme.fonts.families.montserrat};
  font-weight: ${props => props.theme.fonts.weights.medium};
  line-height: 1.25;
  background-color: ${props => props.theme.colors.mainWhite};
  color: ${props => props.theme.colors.mainBlack};
  padding: 48px 21px 48px 22px;
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 394px;
    height: 204px;
    padding: 48px 32px 48px 33px;
  }
`;

const PStyled = styled.p`
  text-align: center;
  margin-bottom: 20px;
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-bottom: 24px;
  }
`;
const MyButton = styled.button`
  position: relative;
  display: block;
  padding: 5px 24px 11px 24px;
  overflow: hidden;
  width: 98px;
  height: 40px;
  font-size: 14px;
  font-family: ${props => props.theme.fonts.families.montserrat};
  font-weight: ${props => props.theme.fonts.weights.semiBold};
  line-height: 2;
  border: ${props =>
    props.filled
      ? props.theme.borders.transparent
      : props.theme.borders.button};
  background-color: ${props =>
    props.filled ? props.theme.colors.mainOrange : 'transparent'};
  color: ${props =>
    props.filled ? props.theme.colors.mainWhite : props.theme.colors.mainBlack};

  transition-property: background-color, color, border;
  transition-duration: 500ms;
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 130px;
    padding: 5px 12px 12px 12px;
  }

  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.colors.mainOrange};
    color: ${props => props.theme.colors.mainWhite};
    border: none;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  }
`;

const DivButtonStyled = styled.div`
  display: flex;
  padding-left: 12px;
  padding-right: 12px;
  justify-content: space-between;
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding-left: 19px;
    padding-right: 19px;
  }
`;

export { ArticleStyled, PStyled, MyButton, DivButtonStyled };
