import styled from 'styled-components';

export const ResumeBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: ${props => props.theme.colors.backdrop};
  width: 100%;
  height: 100%;

  .label {
    position: relative;
  }

  .error {
    position: absolute;
    bottom: 0;
    transform: translateY(100%);
    color: ${props => props.theme.colors.error};
    font-size: 12px;
  }
`;

const ResumeContainerStyled = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 280px;
  height: 395px;
  padding: 20px;
  background-color: ${props => props.theme.colors.mainWhite};
  box-shadow: ${props => props.theme.shadows.modal};
  font-family: ${props => props.theme.fonts.families.montserrat};
  font-weight: ${props => props.theme.fonts.weights.medium};
  color: ${props => props.theme.colors.mainBlack};
  font-size: 16px;
  line-height: 1.2;

  .buttonContainer {
    display: flex;
    justify-content: space-evenly;
    margin-top: 20px;
  }
  .button {
    font-size: 14px;
    font-weight: ${props => props.theme.fonts.weights.medium};
    transition: 0.2s;
  }
  .btnWhite:hover {
    transform: translateY(-0.25em);
    border: ${props =>
      props.filled
        ? props.theme.borders.transparent
        : props.theme.borders.buttonHover};
  }
  .btnOrange:not(:disabled):hover {
    transform: translateY(-0.25em);
    background-color: ${props => props.theme.colors.buttonHoverOrange};
  }
  .form {
    margin-top: 20px;
  }

  .residue {
    font-size: 12px;
    text-align: right;
    color: ${props => props.theme.colors.secondary};
    font-weight: ${props => props.theme.fonts.weights.regular};
  }

  .residueError {
    color: ${props => props.theme.colors.error};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 608px;
    height: 399px;
    .form {
      margin-top: 28px;
    }
    .button {
      width: 130px;
      height: 40px;
      &:first-child {
        margin-right: 28px;
      }
    }
    .buttonContainer {
      justify-content: center;
    }
  }
`;

const TextStyled = styled.p`
  margin-bottom: 20px;
`;

const TextAreaStyled = styled.textarea`
  resize: none;
  width: 240px;
  height: 170px;
  padding: 10px;
  margin-top: 8px;
  &:valid {
    border: 1px solid #a6abb9;
  }
  &:focus {
    background: ${props => props.theme.colors.mainWhite};
    box-shadow: ${props => props.theme.shadows.input};
    border-color: transparent;
  }
  outline: none;
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 568px;
    height: 170px;
  }
`;

export { ResumeContainerStyled, TextStyled, TextAreaStyled };
