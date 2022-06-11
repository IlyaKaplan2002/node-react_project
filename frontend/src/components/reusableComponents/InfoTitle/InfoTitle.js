import React from 'react';
import Title from './InfoTitle.styled';

const InfoTitle = ({ title, className }) => {
  return <Title className={className}>{title}</Title>;
};

export default InfoTitle;
