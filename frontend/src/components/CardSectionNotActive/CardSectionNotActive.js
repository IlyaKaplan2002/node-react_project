import React from 'react';
import {
  CardSectionStyled,
  CardsNameList,
} from './CardSectionNotActive.styled';
import CardForStart from 'components/CardForStart';
import Spliter from 'components/utils/Spliter';
import { cardTypes } from 'constants';
import { Container } from 'styles';

const CardSectionNotActive = ({ cardType, books = [] }) => {
  const isRead = cardType === cardTypes.alreadyRead;
  const withDel = cardType === cardTypes.withdel;
  const withoutDel = cardType === cardTypes.withoutDel;

  return (
    <Container>
      <CardSectionStyled>
        <Spliter></Spliter>
        <CardsNameList read={isRead}>
          <li>Book title</li>
          <li>Author</li>
          <li>Year</li>
          <li>Pages</li>
          {isRead && <li>Rating</li>}
        </CardsNameList>
        {withoutDel && (
          <CardForStart
            name={'...'}
            author={'...'}
            year={'...'}
            pages={'...'}
          />
        )}
        {withDel &&
          books.map(({ name, author, year, pages, rating, _id }) => (
            <>
              <CardForStart
                key={_id ?? name}
                id={_id}
                cardType={cardType}
                name={name}
                author={author}
                year={year}
                pages={pages}
                rating={rating}
              />
              <Spliter></Spliter>
            </>
          ))}
      </CardSectionStyled>
    </Container>
  );
};

export default CardSectionNotActive;
