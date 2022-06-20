import React from 'react';
import Icon from '../Icon';
import GoBackButtonStyled from './GoBackButton.styled';

const GoBackButton = ({ onClick, className }) => {
  return (
    <GoBackButtonStyled className={className} type="button" onClick={onClick}>
      <Icon className="icon" iconId="back" />
    </GoBackButtonStyled>
  );
};

export default GoBackButton;
