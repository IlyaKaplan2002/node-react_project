import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import backgroundImgMobile from 'assets/img/pic.jpg';
import backgroundImgTablet from 'assets/img/pic@2x.jpg';
import backgroundDesktop from 'assets/img/pic@3x.jpg';

const FormContainer = styled.div`
  ${props =>
    props.signup
      ? `min-height: calc(100vh - 60px);
  display: flex;
  align-items: center;`
      : ''}
  padding-top: 32px;
  padding-bottom: 32px;
  text-align: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: linear-gradient(
      to right,
      rgba(9, 30, 63, 0.8),
      rgba(9, 30, 63, 0.8)
    ),
    url(${backgroundImgMobile});
  box-shadow: ${props => props.theme.shadows.hero};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding-top: 65px;
    padding-bottom: 65px;
    background-image: linear-gradient(
        to right,
        rgba(9, 30, 63, 0.8),
        rgba(9, 30, 63, 0.8)
      ),
      url(${backgroundImgTablet});
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    /* padding: 100px 75px; */
    padding: 50px 75px;
    min-height: calc(100vh - 60px);
    display: flex;
    align-items: center;
    background-image: linear-gradient(
        to right,
        rgba(9, 30, 63, 0.8),
        rgba(9, 30, 63, 0.8)
      ),
      url(${backgroundDesktop});
  }

  .button {
    padding-top: 20px;
    padding-bottom: 20px;
    margin-bottom: 20px;
  }

  .googleButton {
    display: flex;
    justify-content: center;
    margin-bottom: 28px;
  }
`;

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;

  width: 280px;
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 400px;
    padding-left: 40px;
    padding-right: 40px;
    background-color: ${props => props.theme.colors.mainWhite};
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;

const BottonGoogle = styled.button`
  height: 40px;
  width: 150px;
  background-color: ${props => props.theme.colors.mainWhite};
  font-family: ${props => props.theme.fonts.families.roboto};
  font-weight: ${props => props.theme.fonts.weights.bold};
  font-size: 17px;
  line-height: 2.375;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 28px;

  .icon {
    width: 18px;
    height: 18px;
  }
`;

const LabelStyled = styled.label`
  font-family: ${props => props.theme.fonts.families.montserrat};
  font-weight: ${props => props.theme.fonts.weights.semiBold};
  color: ${props => props.theme.colors.mainWhite};
  font-size: 14px;
  line-height: 1.21;
  text-align: left;
  margin-bottom: 20px;
  width: 100%;
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    color: ${props => props.theme.colors.secondary};
    font-weight: ${props => props.theme.fonts.weights.medium};
  }
`;

const InputStyled = styled.input`
  font-weight: ${props => props.theme.fonts.weights.regular};
  color: ${props => props.theme.colors.mainBlack};
  background-color: ${props => props.theme.colors.input};
  border: ${props => props.theme.borders.input};
  box-shadow: ${props => props.theme.shadows.input};
  width: 100%;
  padding-top: 13px;
  padding-bottom: 12px;
  padding-left: 8px;
  &::placeholder {
    color: ${props => props.theme.colors.placeholder};
  }
`;

const LabelTextStyled = styled.p`
  margin-bottom: 8px;
`;

const FormSpanStarStyled = styled.span`
  color: ${props => props.theme.colors.mainOrange};
`;
const FormSpanStyled = styled.div`
  text-align: center;
  color: ${props => props.theme.colors.secondary};
  font-family: ${props => props.theme.fonts.families.montserrat};
  font-weight: ${props => props.theme.fonts.weights.medium};
  line-height: 1.21;
  font-size: 13px;
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-top: 20px;
  }
`;

const ErrorInfoStyled = styled.p`
  color: ${props => props.theme.colors.error};
  font-weight: ${props => props.theme.fonts.weights.regular};
  margin-top: 4px;
`;

const LinkStyled = styled(NavLink)`
  color: ${props => props.theme.colors.mainOrange};
  text-decoration: underline;
`;

const Wrapper = styled.div`
  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    display: flex;
    align-items: center;
  }
`;

export {
  LoginFormStyled,
  LabelStyled,
  LabelTextStyled,
  FormSpanStarStyled,
  InputStyled,
  ErrorInfoStyled,
  LinkStyled,
  FormSpanStyled,
  BottonGoogle,
  FormContainer,
  Wrapper,
};
