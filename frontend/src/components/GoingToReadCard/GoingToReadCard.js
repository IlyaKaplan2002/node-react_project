import React from 'react';
import { Card, ListStyled, ListItemStyled, ListItemName } from '../Card';
const GoingToReadCard = ({ name, author, year, pages, reading }) => {
  return (
    <Card name={name} reading={reading}>
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

export default GoingToReadCard;
