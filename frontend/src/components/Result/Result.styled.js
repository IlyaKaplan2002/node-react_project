import styled from 'styled-components';

const ResultContainerStyled = styled.div`
  margin: 0 auto;
  width: 280px;
  height: 340px;
  font-family: ${props => props.theme.fonts.families.montserrat};
  line-height: 1.21;
  background-color: ${props => props.theme.colors.mainWhite};
  box-shadow: ${props => props.theme.shadows.header};
  padding: 20px;
  margin-top: 40px;

  .labelText {
    margin-bottom: 0 !important;
  }

  .list {
    overflow: scroll;
    max-height: 100px;
  }

  .error {
    position: absolute;
    bottom: 0;
    font-family: ${props => props.theme.fonts.families.montserrat};
    color: ${props => props.theme.colors.error};
    font-weight: ${props => props.theme.fonts.weights.medium};
    font-size: 12px;
  }

  .formContainer {
    display: flex;

    .inputMargin {
      position: relative;

      &:first-child {
        margin-right: 20px;
      }
    }

    .dateLabel {
      position: relative;
    }

    .arrowIcon {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 2;
      right: 10px;
      fill: ${props => props.theme.colors.mainBlack};
    }
  }
  .input {
    width: 110px;
    height: 42px;
    margin-top: 4px;
    margin-bottom: 28px;
    font-weight: ${props => props.theme.fonts.weights.regular};
    font-size: 14px;
    outline: none;
    border: 1px solid ${props => props.theme.colors.placeholder};
    background-color: ${props => props.theme.colors.mainBg};
    padding-left: 13px;
  }

  .button {
    width: 240px !important;
    height: 42px;
    text-transform: none;
    margin-bottom: 24px;
    transition: 0.2s;

    &:hover {
      transform: translateY(-0.25em);
      background-color: ${props => props.theme.colors.buttonHoverOrange};
    }
  }

  .icon {
    fill: ${props => props.theme.colors.mainBlack};
    width: 24px;
    height: 12px;
  }

  .changeWeight {
    font-weight: ${props => props.theme.fonts.weights.bold};
    margin-bottom: 4px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 704px;
    height: 309px;
    padding: 29px 96px 32px 96px;

    .form {
      display: flex;
      align-items: center;
    }
    .input {
      margin-bottom: 20px;
    }
    .button {
      margin-bottom: 0;
      margin-left: 32px;
    }

    .list {
      width: fit-content;
    }

    .changeWeight {
      text-align: left;
      margin-bottom: 6px;
    }
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    width: 288px;
    height: 340px;
    padding: 20px;
    margin-top: 0;
    margin-right: 0;

    .form {
      display: block;
    }
    .input {
      margin-bottom: 28px;
    }
    .button {
      margin-bottom: 24px;
      margin-left: 0;
    }

    .list {
      width: 100%;
    }

    .changeWeight {
      text-align: center;
      margin-bottom: 4px;
    }
  }
`;
const TextStyled = styled.p`
  text-align: center;
  font-weight: ${props => props.theme.fonts.weights.semiBold};
  color: ${props => props.theme.colors.mainBlack};
  font-size: 12px;
  text-transform: uppercase;
  margin-bottom: 12px;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-bottom: 27px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    margin-bottom: 12px;
  }
`;

const SpanStyled = styled.span`
  font-family: ${props => props.theme.fonts.families.montserrat};
  font-weight: ${props => props.theme.fonts.weights.medium};
  color: ${props => props.theme.colors.secondary};
  font-size: 11px;
`;
const InputStyled = styled.input`
  width: 110px;
  height: 42px;
  margin-top: 4px;
  margin-bottom: 28px;
  font-weight: ${props => props.theme.fonts.weights.regular};
  font-size: 14px;
  outline: none;
  border: 1px solid ${props => props.theme.colors.placeholder};
  background-color: ${props => props.theme.colors.mainBg};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    margin-bottom: 28px;
  }
`;

const ListStyled = styled.ul`
  display: flex;
  justify-content: space-between;
  font-weight: ${props => props.theme.fonts.weights.regular};
  font-size: 14px;

  .chengeColor {
    color: ${props => props.theme.colors.secondary};
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 240px;
  }
  @media screen and (min-width: ${props => props.theme.breakpoints.desktop}) {
    width: auto;
  }
`;
export {
  ResultContainerStyled,
  TextStyled,
  SpanStyled,
  InputStyled,
  ListStyled,
};
