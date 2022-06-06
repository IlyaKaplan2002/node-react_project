import styled from 'styled-components';

const ResumeContainerStyled = styled.div`
  margin-left: auto;
  margin-right: auto;
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
  }
  .form {
    margin-top: 20px;
  }

  @media screen and(min-width:${props => props.theme.breakpoints.tablet}) {
    width: 608px;
    height: 399px;

    .form {
      margin-top: 28px;
    }

    .button {
      width: 130px;
      height: 40px;
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

  @media screen and(min-width:${props => props.theme.breakpoints.tablet}) {
    width: 568px;
    height: 170px;
  }
`;

export { ResumeContainerStyled, TextStyled, TextAreaStyled };
