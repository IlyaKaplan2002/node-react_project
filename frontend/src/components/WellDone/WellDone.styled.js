import styled from 'styled-components';

const ArticleStyled = styled.article`
  margin: 0px;
  padding: 0px;
  width: 280px;
  height: 358px;
  /* margin: 0 auto; */
  font-size: 16px;
  text-align: center;

  font-family: ${props => props.theme.fonts.families.montserrat};
  font-weight: ${props => props.theme.fonts.weights.medium};
  line-height: 1.4;
  background-color: ${props => props.theme.colors.mainWhite};
  color: ${props => props.theme.colors.mainBlack};
  padding: 46px 63px 44px 63px;
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 394px;
    height: 286px;
    padding: 42px 29px 48px 29px;
  }

  .button {
    width: 152px;
    height: 40px;
    font-size: 14px;
    transition: 0.2s linear;
  }

  .btnWhite:hover {
    transform: translateY(-0.25em);
    border: ${props =>
      props.filled
        ? props.theme.borders.transparent
        : props.theme.borders.buttonHover};
  }

  .btnOrange:hover {
    transform: translateY(-0.25em);
    background-color: ${props => props.theme.colors.buttonHoverOrange};
  }

  .button:not(:last-child) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    .button:not(:last-child) {
      margin-bottom: 0;
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

const DivButtonStyled = styled.div`
  justify-content: space-between;
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
  }
`;
const WellDoneIcon = styled.svg`
  width: 50px;
  height: 45px;
  margin-bottom: 15px;

  .icon {
    fill: ${props => props.theme.colors.placeholder};
    stroke: ${props => props.theme.colors.placeholder};
  }
`;

export { ArticleStyled, PStyled, DivButtonStyled, WellDoneIcon };
