import styled from 'styled-components';

const Button = styled.button`
  text-transform: capitalize;
  padding: 12px;
  min-width: 100px;
  font-size: 16px;
  font-family: ${props => props.theme.fonts.families.montserrat};
  font-style: ${props => props.theme.fonts.weights.semiBold};
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
  }
`;

export default Button;