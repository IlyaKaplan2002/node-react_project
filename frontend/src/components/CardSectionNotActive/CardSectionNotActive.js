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
import Media from 'react-media';
import ScrollContainer from 'react-indiana-drag-scroll';

const CardSectionNotActive = ({ cardType, books = [] }) => {
  const withoutDelEmpty = cardType === trainingCardTypes.withoutDelEmpty;
  const withDel = cardType === trainingCardTypes.withDel;
  const started = cardType === trainingCardTypes.started;

  return (
    <Container className="container">
      <CardSectionStyled>
        <Spliter></Spliter>
        <CardsNameList>
          <li>Book title</li>
          <li>Author</li>
          <li>Year</li>
          <li>Pages</li>
        </CardsNameList>
        <ScrollContainer className="booksContainer" hideScrollbars={false}>
          {withoutDelEmpty && (
            <Media query={{ small: '(max-width:767px)' }}>
              {matches => (
                <>
                  <CardForStart
                    name={'...'}
                    author={matches.small ? '...' : ''}
                    year={matches.small ? '...' : ''}
                    pages={matches.small ? '...' : ''}
                    cardType={cardType}
                  />
                  <Spliter></Spliter>
                </>
              )}
            </Media>
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
          {withDel && (
            <Media
              query="(min-width:768px)"
              render={() => (
                <>
                  <CardForStart
                    name={'...'}
                    author={''}
                    year={''}
                    pages={''}
                    cardType={trainingCardTypes.withoutDelEmpty}
                  />
                  <Spliter></Spliter>
                </>
              )}
            />
          )}
        </ScrollContainer>
      </CardSectionStyled>
    </Container>
  );
};

export default CardSectionNotActive;
