import React from 'react';
import Media from 'react-media';
import { useTranslation } from 'react-i18next';
import { Card } from 'components/Card';
import { cardTypes } from 'constants';
import { Container } from 'styles';
import {
  CardSectionStyled,
  CardSectionNameStyled,
  CardsNameList,
} from './CardSection.styled';

const CardSection = ({
  cardType,
  books = [],
  className,
  onResumeClick,
  setResumeBookId,
}) => {
  const isReading = cardType === cardTypes.reading;
  const isRead = cardType === cardTypes.alreadyRead;
  const isGoingToRead = cardType === cardTypes.goingToRead;

  const { t } = useTranslation('translation', { keyPrefix: 'card' });

  return (
    <>
      {Boolean(books.length) && (
        <Container className={className}>
          <CardSectionStyled>
            {isRead && (
              <CardSectionNameStyled>
                {t('status.alreadyRead')}
              </CardSectionNameStyled>
            )}
            {isGoingToRead && (
              <CardSectionNameStyled>
                {t('status.goingToRead')}
              </CardSectionNameStyled>
            )}
            {isReading && (
              <CardSectionNameStyled>
                {t('status.reading')}
              </CardSectionNameStyled>
            )}
            <Media
              query="(min-width: 768px)"
              render={() => (
                <>
                  <CardsNameList read={isRead}>
                    <li>{t('title')}</li>
                    <li>{t('author')}</li>
                    <li>{t('year')}</li>
                    <li>{t('pages')}</li>
                    {isRead && <li>{t('rating')}</li>}
                  </CardsNameList>
                </>
              )}
            />
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
                onResumeClick={onResumeClick}
                setResumeBookId={setResumeBookId}
              />
            ))}
          </CardSectionStyled>
        </Container>
      )}
    </>
  );
};

export default CardSection;
