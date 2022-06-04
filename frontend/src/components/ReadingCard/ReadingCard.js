import React from 'react';
import { Card, ListStyled, ListItemStyled, ListItemName } from '../Card';

const ReadingCard = ({ name, author, year, pages }) => {
  return (
    <Card name={name} reading={true}>
      <ListStyled>
        <ListItemStyled>
          <ListItemName>Author:</ListItemName>
          <span>{author}</span>
        </ListItemStyled>
        <ListItemStyled>
          <ListItemName>Year:</ListItemName>
          <span>{year}</span>
        </ListItemStyled>
        <ListItemStyled>
          <ListItemName>Pages:</ListItemName>
          <span>{pages}</span>
        </ListItemStyled>
      </ListStyled>
    </Card>
  );
};

export default ReadingCard;
