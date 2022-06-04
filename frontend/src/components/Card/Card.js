import React from 'react';
import { MdMenuBook } from 'react-icons/md';
import { CardStyled, BookIcon, CardName } from './Card.styled';

const Card = ({ name, children, reading = false }) => {
  return (
    <CardStyled>
      <BookIcon reading={reading}><MdMenuBook size={20}/></BookIcon>
      <CardName>{name}</CardName>
      {children}
    </CardStyled>
  );
};

export default Card;
