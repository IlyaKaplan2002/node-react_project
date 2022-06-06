import React from 'react';
import {
  CardSectionStyled,
  CardSectionNameStyled,
  CardsNameList,
} from './CardSection.styled';
import { Card } from 'components/Card';
import { cardTypes } from 'constants';
import { Container } from 'styles';

const CardSection = ({ cardType, books = [] }) => {
  const isReading = cardType === cardTypes.reading;
  const isRead = cardType === cardTypes.alreadyRead;
  const isGoingToRead = cardType === cardTypes.isGoingToRead;

  return (
    <Container>
      <CardSectionStyled>
      {isRead && <CardSectionNameStyled>Already read</CardSectionNameStyled>}
      {isGoingToRead && (
        <CardSectionNameStyled>Going to read</CardSectionNameStyled>
      )}
      {isReading && <CardSectionNameStyled>Reading now</CardSectionNameStyled>}
      <CardsNameList read={isRead}>
        <li>Book title</li>
        <li>Author</li>
        <li>Year</li>
        <li>Pages</li>
        {isRead && <li>Rating</li>}
      </CardsNameList>
      {books.map(({ name, author, year, pages, rating, _id }) => (
        <Card
          key={_id ?? name}
          id={_id}
          cardType={cardType}
          name={name}
          author={author}
          year={year}
          pages={pages}
          rating={rating}
        />
      ))}
    </CardSectionStyled>
    </Container>
  );
};

export default CardSection;