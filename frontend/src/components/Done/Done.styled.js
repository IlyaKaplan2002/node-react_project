import styled from 'styled-components';

const Backdrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.backdrop};
  z-index: 3;
`;

const ArticleStyled = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  margin: 0px;
  padding: 0px;
  width: 280px;
  height: 256px;
  /* margin: 0 auto; */
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

  .button {
    width: 130px;
    height: 40px;
    font-size: 14px;
    text-align: center;
    margin: 0 auto;
    transition: 0.2s linear;

    &:hover {
      transform: translateY(-0.25em);
      background-color: ${props => props.theme.colors.buttonHoverOrange};
    }
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

const WellDoneIcon = styled.svg`
  fill: ${props => props.theme.colors.mainOrange};
  stroke: ${props => props.theme.colors.mainOrange};
  margin-bottom: 15px;
  width: 50px;
  height: 45px;
`;

export { Backdrop, ArticleStyled, PStyled, WellDoneIcon };
