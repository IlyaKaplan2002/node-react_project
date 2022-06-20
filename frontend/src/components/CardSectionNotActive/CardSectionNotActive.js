import React from 'react';
import {
  CardSectionStyled,
  CardsNameList,
} from './CardSectionNotActive.styled';
import CardForStart from 'components/CardForStart';
import Spliter from 'components/reusableComponents/Spliter';
import { Container } from 'styles';
import { trainingCardTypes } from 'constants';
import Media from 'react-media';
import ScrollContainer from 'react-indiana-drag-scroll';
import { useTranslation } from 'react-i18next';

const CardSectionNotActive = ({ cardType, books = [] }) => {
  const withoutDelEmpty = cardType === trainingCardTypes.withoutDelEmpty;
  const withDel = cardType === trainingCardTypes.withDel;
  const started = cardType === trainingCardTypes.started;

  const { t } = useTranslation('translation', { keyPrefix: 'card' });

  return (
    <Container className="container">
      <CardSectionStyled>
        <Spliter></Spliter>
        <CardsNameList>
          <li>{t('title')}</li>
          <li>{t('author')}</li>
          <li>{t('year')}</li>
          <li>{t('pages')}</li>
        </CardsNameList>
        <ScrollContainer className="booksContainer" hideScrollbars={false}>
          {withoutDelEmpty && (
            <Media queries={{ small: '(max-width:767px)' }}>
              {matches => {
                return (
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
                );
              }}
            </Media>
          )}
          {(withDel || started) && (
            <>
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
            </>
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
