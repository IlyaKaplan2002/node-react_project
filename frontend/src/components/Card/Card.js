import React from 'react';
import { MdMenuBook } from 'react-icons/md';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { MdOutlineDelete } from 'react-icons/md';
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
  DellIcon
} from './Card.styled';
import { cardTypes } from 'constants';
import Media from 'react-media';

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
      <DellIcon
          // onClick={() => dispatch(trainingsActions.removeSelectedBook(id))}
          // reading={withDel}
        >
          <MdOutlineDelete size={21} />
        </DellIcon>
      <ListStyled read={isRead}>
        <ListItemStyled>
          <ListItemName>Author:</ListItemName>
          <span>
            <EllipsisText text={author} length={12} />
          </span>
        </ListItemStyled>
        <ListItemStyled>
          <ListItemName>Year:</ListItemName>
          <span>{year}</span>
        </ListItemStyled>
        <ListItemStyled>
          <ListItemName>Pages:</ListItemName>
          <span>{pages}</span>
        </ListItemStyled>
        {isRead && (
          <ListItemStyled>
            <ListItemName>Rating:</ListItemName>
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
          label={'Resume'}
          onClick={onResumeButtonClick}
        />
      )}
    </CardStyled>
  );
};

export default Card;
