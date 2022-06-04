import React from 'react';
import { ReactComponent as BackIcon } from 'assets/icons/back.svg';
import GoBackButtonStyled from './GoBackButton.styled';

const GoBackButton = ({ onClick, className }) => {
  return (
    <GoBackButtonStyled className={className} type="button" onClick={onClick}>
      <BackIcon className="icon" />
    </GoBackButtonStyled>
  );
};

export default GoBackButton;
