import React from 'react';
import { MdMenuBook } from 'react-icons/md';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import Button from 'components/reusableComponents/Button';
import EllipsisText from 'react-ellipsis-text';
import {
  CardStyled,
  BookIcon,
  CardName,
  ListStyled,
  ListItemStyled,
  ListItemName,
  RatingIcon,
  CardNameWrapper,
} from './Card.styled';
import { cardTypes } from 'constants';
import Media from 'react-media';
import { useTranslation } from 'react-i18next';

const Card = ({
  name,
  onResumeClick,
  author,
  year,
  pages,
  rating = 0,
  cardType,
  id,
  setResumeBookId,
}) => {
  const { t } = useTranslation('translation', { keyPrefix: 'card' });

  const onResumeButtonClick = () => {
    setResumeBookId(id);
    onResumeClick();
  };

  const isReading = cardType === cardTypes.reading;
  const isRead = cardType === cardTypes.alreadyRead;

  const getLength = matches => {
    if (matches.mobile) {
      return 16;
    }
    if (matches.tablet) {
      return 16;
    }
    if (matches.desktop) {
      return 30;
    }
  };

  return (
    <CardStyled read={isRead}>
      <BookIcon reading={isReading}>
        <MdMenuBook size={21} />
      </BookIcon>
      <CardNameWrapper>
        <CardName>
          <Media
            queries={{
              mobile: '(max-width: 767px)',
              tablet: '(min-width: 768px) and (max-width: 1279px)',
              desktop: '(min-width: 1280px)',
            }}
          >
            {matches => (
              <EllipsisText text={name} length={getLength(matches)} />
            )}
          </Media>
        </CardName>
      </CardNameWrapper>
      <ListStyled read={isRead}>
        <ListItemStyled>
          <ListItemName>{t('author')}:</ListItemName>
          <span>
            <EllipsisText text={author} length={12} />
          </span>
        </ListItemStyled>
        <ListItemStyled>
          <ListItemName>{t('year')}:</ListItemName>
          <span>{year}</span>
        </ListItemStyled>
        <ListItemStyled>
          <ListItemName>{t('pages')}:</ListItemName>
          <span>{pages}</span>
        </ListItemStyled>
        {isRead && (
          <ListItemStyled>
            <ListItemName>{t('rating')}:</ListItemName>
            <RatingIcon>
              {Array(rating)
                .fill(null)
                .map((_, idx) => (
                  <AiFillStar key={`${idx}${id ?? name}`} size={17} />
                ))}
              {Array(5 - rating)
                .fill()
                .map((_, idx) => (
                  <AiOutlineStar
                    key={`${rating - idx}${id ?? name}`}
                    size={17}
                  />
                ))}
            </RatingIcon>
          </ListItemStyled>
        )}
      </ListStyled>
      {isRead && (
        <Button
          className={'resume-card-button'}
          label={t('resume')}
          onClick={onResumeButtonClick}
        />
      )}
    </CardStyled>
  );
};

export default Card;
