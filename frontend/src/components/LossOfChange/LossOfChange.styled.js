import styled from 'styled-components';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  left: 0;
  background-color: ${props => props.theme.colors.backdrop};
  z-index: 3;
`;

const ArticleStyled = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 280px;
  height: 220px;
  /* margin: 0 auto; */
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

  .button {
    font-size: 14px;
    width: calc((100% - 16px) / 2);
    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      width: calc((100% - 30px) / 2);
    }
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
`;

const PStyled = styled.p`
  text-align: center;
  margin-bottom: 20px;
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-bottom: 24px;
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

export { Backdrop, ArticleStyled, PStyled, DivButtonStyled };
