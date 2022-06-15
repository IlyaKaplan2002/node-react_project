import styled from 'styled-components';

const Button = styled.button`
  position: relative;

  display: block;
  padding: 12px;
  min-width: 80px;
  font-size: 16px;
  font-family: ${props => props.theme.fonts.families.montserrat};
  font-weight: ${props => props.theme.fonts.weights.semiBold};
  line-height: 1.25;
  border: ${props =>
    props.filled
      ? props.theme.borders.transparent
      : props.theme.borders.button};
  background-color: ${props =>
    props.filled ? props.theme.colors.mainOrange : 'transparent'};
  color: ${props =>
    props.filled ? props.theme.colors.mainWhite : props.theme.colors.mainBlack};

  &:hover {
    cursor: pointer;
    box-shadow: ${props => props.theme.shadows.hero};
    transform: translateY(-0.25em);
  }

  &:disabled {
    color: ${props => props.theme.colors.mainBlack};
    background-color: ${props => props.theme.colors.secondary};
    cursor: no-drop;
  }
`;

export default Button;
