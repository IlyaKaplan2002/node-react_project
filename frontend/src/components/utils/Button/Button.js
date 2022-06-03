import React from "react";
import StyledButton from './Button.styled'

const Button = ({ label, type, className, onClick }) => {
    return <StyledButton type={type} className={ className } onClick={onClick}>{ label }</StyledButton>;
};

export default Button;