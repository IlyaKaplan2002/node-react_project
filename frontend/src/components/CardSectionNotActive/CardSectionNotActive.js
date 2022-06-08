import React from 'react';
import {
  CardSectionStyled,
  CardsNameList,
} from './CardSectionNotActive.styled';
import CardForStart from 'components/CardForStart';
import Spliter from 'components/utils/Spliter';
import { cardTypes } from 'constants';
import { Container } from 'styles';

// cardType = withoutDelEmpty
// cardType =withDel
// cardType=notChecked
// cardType=checked

const CardSectionNotActive = ({ cardType, books = [] }) => {
//   const isRead = cardType === cardTypes.alreadyRead;
  const withoutDelEmpty = cardType === cardTypes.withoutDelEmpty;
  const withDel = cardType === cardTypes.withDel;
  const notChecked = cardType === cardTypes.notChecked;
  const checked = cardType === cardTypes.checked;

  return (
    <Container>
      <CardSectionStyled>
        <Spliter></Spliter>
        {/* <CardsNameList read={isRead}>
          <li>Book title</li>
          <li>Author</li>
          <li>Year</li>
          <li>Pages</li>
          {isRead && <li>Rating</li>}
        </CardsNameList> */}
        {withoutDelEmpty &&          
            <>
              <CardForStart
                name={'...'}
                author={'...'}
                year={'...'}
                pages={'...'}
                cardType={cardType}
              />
              <Spliter></Spliter>
            </>
          }
        {(withDel||notChecked||checked) &&
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
