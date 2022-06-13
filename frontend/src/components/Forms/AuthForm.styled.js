import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import mobileInImg from 'assets/img/mobileIn.jpg';
import mobileUpImg from 'assets/img/mobileUp.jpg';
import tabletInImg from 'assets/img/tabletIn.jpg';
import tabletUpImg from 'assets/img/tabletUp.jpg';
import desktopImg from 'assets/img/desktop.jpg';

const FormContainer = styled.div`
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
    url(${mobileInImg});
  background-position: 100% 100%;
  box-shadow: ${props => props.theme.shadows.hero};

  ${props =>
    props.signup
      ? `min-height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  background-image: linear-gradient(
      to right,
      rgba(9, 30, 63, 0.8),
      rgba(9, 30, 63, 0.8)
    ),
    url(${mobileUpImg});`
      : ''}

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding-top: 65px;
    padding-bottom: 65px;
    background-image: linear-gradient(
        to right,
        rgba(9, 30, 63, 0.8),
        rgba(9, 30, 63, 0.8)
      ),
      url(${tabletInImg});

    ${props =>
      props.signup
        ? ` background-image: linear-gradient(
      to right,
      rgba(9, 30, 63, 0.8),
      rgba(9, 30, 63, 0.8)
    ),
    url(${tabletUpImg});`
        : ''}
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    padding: 50px 75px;
    min-height: calc(100vh - 60px);
    display: flex;
    align-items: center;
    background-image: linear-gradient(
        to right,
        rgba(9, 30, 63, 0.8),
        rgba(9, 30, 63, 0.8)
      ),
      url(${desktopImg});
  }

  .button {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .googleButton {
    display: flex;
    justify-content: center;
    margin-bottom: 28px;
  }
`;

const AuthFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  width: 280px;

  .wrapperSignIn {
    margin-bottom: 20px;
  }

  .wrapperSignUp {
    margin-bottom: 20px;
  }
  .input {
    background-color: ${props => props.theme.colors.mainWhite};
  }

  .label:not(:last-child) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 400px;
    padding-left: 40px;
    padding-right: 40px;
    background-color: ${props => props.theme.colors.mainWhite};
    padding-top: 40px;
    padding-bottom: 40px;

    .input {
      background-color: ${props => props.theme.colors.iconActiveBg};
    }

    .wrapperSignIn {
      margin-bottom: 32px;
    }

    .wrapperSignUp {
      margin-bottom: 35px;
    }
  }
`;

const FormSpanStarStyled = styled.span`
  color: ${props => props.theme.colors.mainOrange};
  margin-left: 4px;
`;

const FormSpanStyled = styled.div`
  text-align: center;
  color: ${props => props.theme.colors.secondary};
  font-family: ${props => props.theme.fonts.families.montserrat};
  font-weight: ${props => props.theme.fonts.weights.medium};
  line-height: 1.21;
  font-size: 13px;
  margin-top: 16px;
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-top: 20px;
  }
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
  AuthFormStyled,
  FormSpanStarStyled,
  LinkStyled,
  FormSpanStyled,
  FormContainer,
  Wrapper,
};
