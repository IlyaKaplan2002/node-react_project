import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Media from 'react-media';
import { useTranslation } from 'react-i18next';
import EllipsisText from 'react-ellipsis-text';
import { tryRefreshToken } from 'helpers';
import { cardTypes } from 'constants';
import { authSelectors } from 'redux/auth';
import { booksActions } from 'redux/books';
import deleteBook from 'api/books/deleteBook';
import Button from 'components/reusableComponents/Button';
import { MdMenuBook } from 'react-icons/md';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { MdOutlineDelete } from 'react-icons/md';
import {
  CardStyled,
  BookIcon,
  CardName,
  ListStyled,
  ListItemStyled,
  ListItemName,
  RatingIcon,
  CardNameWrapper,
  DellIcon,
} from './Card.styled';

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
  const [delDisabled, setDelDisabled] = useState(false);
  const token = useSelector(authSelectors.getToken);
  const refreshToken = useSelector(authSelectors.getRefreshToken);
  const dispatch = useDispatch();

  const onResumeButtonClick = () => {
    setResumeBookId(id);
    onResumeClick();
  };

  const isReading = cardType === cardTypes.reading;
  const isRead = cardType === cardTypes.alreadyRead;

  const getLength = matches => {
    if (matches.mobile) {
      return 24;
    }
    if (matches.tablet) {
      return 26;
    }
    if (matches.desktop) {
      return 50;
    }
  };
  const getLengthAuthor = matches => {
    if (matches.mobile) {
      return 16;
    }
    if (matches.tablet) {
      return 16;
    }
    if (matches.desktop) {
      return 38;
    }
  };
  const onDelete = async () => {
    const tryFunc = async tokenValue => {
      await deleteBook(id, tokenValue);
      dispatch(booksActions.remove(id));
    };

    try {
      setDelDisabled(true);
      await tryFunc(token);
    } catch (error) {
      tryRefreshToken(error, refreshToken, dispatch, tryFunc);
    }
    setDelDisabled(false);
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
      <DellIcon disabled={delDisabled} onClick={onDelete}>
        <MdOutlineDelete size={21} />
      </DellIcon>
      <ListStyled read={isRead}>
        <ListItemStyled>
          <ListItemName>{t('author')}:</ListItemName>

          <span>
            <Media
              queries={{
                mobile: '(max-width: 767px)',
                tablet: '(min-width: 768px) and (max-width: 1279px)',
                desktop: '(min-width: 1280px)',
              }}
            >
              {matches => (
                <EllipsisText text={author} length={getLengthAuthor(matches)} />
              )}
            </Media>
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
