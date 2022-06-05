import React from 'react';
import GoBackButtonStyled from './GoBackButton.styled';
import Icon from '../Icon';

const GoBackButton = ({ onClick, className }) => {
  return (
    <GoBackButtonStyled className={className} type="button" onClick={onClick}>
      <Icon className="icon" iconId="back" />
    </GoBackButtonStyled>
  );
};

export default GoBackButton;
