import styled from 'styled-components';

const AddBookFormStyled = styled.form`
  .wrapper {
    margin-bottom: 40px;
  }

  .label {
    display: block;
    position: relative;
  }

  .label:not(:last-child) {
    margin-bottom: 20px;
  }

  .labelText {
    margin-bottom: 8px;
    display: block;
    font-size: 14px;
    line-height: 17px;
    color: ${props => props.theme.colors.secondary};
  }

  .labelText,
  .error,
  .button {
    font-family: ${props => props.theme.fonts.families.montserrat};
    font-weight: ${props => props.theme.fonts.weights.medium};
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

  .button {
    width: fit-content;
    height: fit-content;
    padding: 12px 70px;
    margin: 0 auto;
    font-size: 14px;
    line-height: 17px;
  }
`;

export default AddBookFormStyled;
