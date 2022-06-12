import React from 'react';
import {
  CardSectionStyled,
  CardsNameList,
  ListOwerflow,
} from './CardSectionNotActive.styled';
import CardForStart from 'components/CardForStart';
import Spliter from 'components/reusableComponents/Spliter';
import { Container } from 'styles';
import { trainingCardTypes } from 'constants';

const CardSectionNotActive = ({ cardType, books = [] }) => {
  const withoutDelEmpty = cardType === trainingCardTypes.withoutDelEmpty;
  const withDel = cardType === trainingCardTypes.withDel;
  const started = cardType === trainingCardTypes.started;

  return (
    <Container>
      <CardSectionStyled>
        <Spliter></Spliter>
        <CardsNameList>
          <li>Book title</li>
          <li>Author</li>
          <li>Year</li>
          <li>Pages</li>
        </CardsNameList>
        {withoutDelEmpty && (
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
        )}
        {(withDel || started) && (
          <ListOwerflow>
            {books.map(({ name, author, year, pages, status, _id }) => {
              return (
                <div key={_id}>
                  <CardForStart
                    id={_id}
                    cardType={cardType}
                    status={status}
                    name={name}
                    author={author}
                    year={year}
                    pages={pages}
                  />
                  <Spliter></Spliter>
                </div>
              );
            })}
          </ListOwerflow>
        )}
      </CardSectionStyled>
    </Container>
  );
};

export default CardSectionNotActive;
