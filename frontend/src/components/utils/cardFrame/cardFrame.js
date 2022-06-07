import React from 'react';
import { CardFrameStyled } from './cardFrame.styled';

const CardFrame = ({ children }) => {
  return <CardFrameStyled>{children}</CardFrameStyled>;
};

export default CardFrame;
