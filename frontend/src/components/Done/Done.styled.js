import styled from 'styled-components';

const ArticleStyled = styled.article`
  margin: 0px;
  padding: 0px;
  width: 280px;
  height: 256px;
  margin: 0 auto;
  font-size: 16px;
  text-align: center;

  font-family: ${props => props.theme.fonts.families.montserrat};
  font-weight: ${props => props.theme.fonts.weights.medium};
  line-height: 1.4;
  background-color: ${props => props.theme.colors.mainWhite};
  color: ${props => props.theme.colors.mainBlack};
  padding: 42px 26px 40px 27px;
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 394px;
    height: 256px;
    padding: 42px 84px 40px 83px;
  }
`;

const PStyled = styled.p`
  margin: 0 auto;
  width: 100%;
  margin-bottom: 14px;
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-bottom: 24px;
  }
`;

const MyButton = styled.button`
  position: relative;
  display: block;
  width: 130px;
  height: 40px;
  font-size: 14px;
  text-align: center;
  margin: 0 auto;
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

  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.colors.mainOrange};
    color: ${props => props.theme.colors.mainWhite};
    border: none;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  }
`;

const WellDoneIcon = styled.svg`
  fill: ${props => props.theme.colors.mainOrange};
  stroke: ${props => props.theme.colors.mainOrange};
  margin-bottom: 15px;
  width: 50px;
  height: 45px;
`;

export { ArticleStyled, PStyled, MyButton, WellDoneIcon };
