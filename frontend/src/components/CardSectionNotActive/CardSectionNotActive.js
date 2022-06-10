import React from 'react';
import {
  CardSectionStyled,
  CardsNameList,
  ListOwerflow,
} from './CardSectionNotActive.styled';
import CardForStart from 'components/CardForStart';
import Spliter from 'components/utils/Spliter';
import { Container } from 'styles';
import { trainingCardTypes } from 'constants';

const CardSectionNotActive = ({ cardType, books = [] }) => {
  const withoutDelEmpty = cardType === trainingCardTypes.withoutDelEmpty;
  const withDel = cardType === trainingCardTypes.withDel;
  const notChecked = cardType === trainingCardTypes.notChecked;
  const checked = cardType === trainingCardTypes.checked;

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
        {(withDel || notChecked || checked) && (
          <ListOwerflow>
            {books.map(({ name, author, year, pages, _id }) => (
              <>
                <CardForStart
                  key={_id ?? name}
                  id={_id}
                  cardType={cardType}
                  name={name}
                  author={author}
                  year={year}
                  pages={pages}
                />
                <Spliter></Spliter>
              </>
            ))}
          </ListOwerflow>
        )}
      </CardSectionStyled>
    </Container>
  );
};

export default CardSectionNotActive;
