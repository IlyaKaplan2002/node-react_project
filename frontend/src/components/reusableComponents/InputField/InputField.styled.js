import styled from 'styled-components';

const InputFieldStyled = styled.label`
  display: block;
  position: relative;

  .labelText,
  .error {
    font-family: ${props => props.theme.fonts.families.montserrat};
    font-weight: ${props => props.theme.fonts.weights.medium};
  }

  .labelText {
    margin-bottom: 8px;
    display: block;
    font-size: 14px;
    line-height: 17px;
    color: ${props => props.theme.colors.secondary};
  }

  .input::placeholder,
  .input {
    font-family: ${props => props.theme.fonts.families.montserrat};
    font-weight: ${props => props.theme.fonts.weights.regular};
    font-size: 14px;
    line-height: 17px;
    color: ${props => props.theme.colors.placeholder};
  }

  .input {
    display: block;
    width: 100%;
    padding: 12px;
    outline: none;
    background: ${props => props.theme.colors.mainBg};
    border: ${props => props.theme.borders.input};
    color: ${props => props.theme.colors.mainBlack};
  }

  .input:focus {
    background: ${props => props.theme.colors.mainWhite};
    box-shadow: ${props => props.theme.shadows.input};
    border-color: transparent;
  }

  .error {
    position: absolute;
    bottom: 0;
    transform: translateY(100%);
    color: ${props => props.theme.colors.error};
    font-size: 12px;
  }

  .iconLabel {
    display: block;
    position: relative;
    width: 280px;
    height: 68px;

    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      width: 320px;
      height: 68px;
    }

    .icon {
      position: absolute;
      top: 58%;
      z-index: 2;
      right: 10px;
      fill: ${props => props.theme.colors.mainBlack};
    }
  }
`;

export default InputFieldStyled;
