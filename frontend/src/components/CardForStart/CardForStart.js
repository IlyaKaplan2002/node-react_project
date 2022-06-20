import React from 'react';
import { MdMenuBook } from 'react-icons/md';
import { MdOutlineDelete } from 'react-icons/md';
import { MdCheckBoxOutlineBlank } from 'react-icons/md';
import { BiCheckSquare } from 'react-icons/bi';
import {
  CardStyled,
  BookIcon,
  CardName,
  ListStyled,
  ListItemStyled,
  ListItemName,
  CardNameWrapper,
  DellIcon,
} from './CardForStart.styled';
import { cardTypes } from 'constants';
import { trainingCardTypes } from 'constants';
import { useDispatch } from 'react-redux';
import { trainingsActions } from 'redux/trainings';
import EllipsisText from 'react-ellipsis-text';
import Media from 'react-media';
import { useTranslation } from 'react-i18next';

const CardForStart = ({ name, author, year, pages, id, cardType, status }) => {
  const { t } = useTranslation('translation', { keyPrefix: 'card' });

  const dispatch = useDispatch();
  const isReading = status === cardTypes.reading;
  const isRead = status === cardTypes.alreadyRead;
  const goingToRead = status === cardTypes.goingToRead;

  const withoutDelEmpty = cardType === trainingCardTypes.withoutDelEmpty;
  const withDel = cardType === trainingCardTypes.withDel;
  const started = cardType === trainingCardTypes.started;

  const getLength = matches => {
    if (matches.mobile) {
      return 28;
    }
    if (matches.tablet) {
      return 18;
    }
    if (matches.desktop) {
      return 32;
    }
  };
  const getLengthAuthor = matches => {
    if (matches.mobile) {
      return 16;
    }
    if (matches.tablet) {
      return 26;
    }
    if (matches.desktop) {
      return 32;
    }
  };
  return (
    <CardStyled read={isRead}>
      {(withoutDelEmpty || withDel) && (
        <BookIcon>
          <MdMenuBook size={21} />
        </BookIcon>
      )}
      {started && isRead && (
        <BookIcon isRead>
          <BiCheckSquare size={21} />
        </BookIcon>
      )}
      {started && (isReading || goingToRead) && (
        <BookIcon>
          <MdCheckBoxOutlineBlank size={21} />
        </BookIcon>
      )}
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

      {withDel && (
        <DellIcon
          onClick={() => dispatch(trainingsActions.removeSelectedBook(id))}
          reading={withDel}
        >
          <MdOutlineDelete size={21} />
        </DellIcon>
      )}
      {
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
                  <EllipsisText
                    text={author}
                    length={getLengthAuthor(matches)}
                  />
                )}
              </Media>
            </span>
          </ListItemStyled>
          <ListItemStyled className="year">
            <ListItemName>{t('year')}:</ListItemName>
            <span>{year}</span>
          </ListItemStyled>
          <ListItemStyled className="page">
            <ListItemName>{t('pages')}:</ListItemName>
            <span>{pages}</span>
          </ListItemStyled>
        </ListStyled>
      }
    </CardStyled>
  );
};

export default CardForStart;
