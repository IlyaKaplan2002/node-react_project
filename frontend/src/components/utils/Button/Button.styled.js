import styled from 'styled-components';

const Button = styled.button`
    text-transform: capitalize;
    padding: 12px 76px;
    font-size: 16px;
    font-family: ${props => props.theme.fonts.families.montserrat};
    font-style: ${props => props.theme.fonts.weights.semiBold};
    line-height: 1.25;
    border: none;
    background-color: ${props => props.theme.colors.mainOrange};
    color: ${props => props.theme.colors.mainWhite};

    &:hover {
        cursor: pointer;
    }
`;

export default Button;