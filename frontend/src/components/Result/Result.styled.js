import styled from 'styled-components';

const ResultContainerStyled = styled.div`
  width: 280px;
  height: 340px;
  font-family: ${props => props.theme.fonts.families.montserrat};
  line-height: 1.21;
  background-color: ${props => props.theme.colors.mainWhite};
  padding: 20px;

  .formContainer {
    display: flex;

    .inputMargin {
      &:first-child {
        margin-right: 20px;
      }
    }
  }

  .button {
    width: 100%;
    text-transform: none;
    margin-bottom: 24px;
  }

  .changeWeight {
    font-weight: ${props => props.theme.fonts.weights.bold};
  }
`;
const TextStyled = styled.p`
  text-align: center;
  font-weight: ${props => props.theme.fonts.weights.semiBold};
  color: ${props => props.theme.colors.mainBlack};
  font-size: 12px;
  text-transform: uppercase;
  margin-bottom: 12px;
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
`;

const ListStyled = styled.ul`
  display: flex;
  justify-content: space-between;
  font-weight: ${props => props.theme.fonts.weights.regular};
  font-size: 14px;

  .chengeColor {
    color: ${props => props.theme.colors.secondary};
  }
`;
export {
  ResultContainerStyled,
  TextStyled,
  SpanStyled,
  InputStyled,
  ListStyled,
};
