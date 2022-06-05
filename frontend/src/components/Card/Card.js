import React from 'react';
import { MdMenuBook } from 'react-icons/md';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import Button from 'components/utils/Button';
import {
  CardStyled,
  BookIcon,
  CardName,
  ListStyled,
  ListItemStyled,
  ListItemName,
  RatingIcon,
} from './Card.styled';
import { cardTypes } from 'constants';

const Card = ({
  name,
  onResumeClick = () => {},
  author,
  year,
  pages,
  rating = 0,
  cardType,
}) => {
  const isReading = cardType === cardTypes.reading;
  const isRead = cardType === cardTypes.alreadyRead;
  return (
    <CardStyled>
      <BookIcon reading={isReading}>
        <MdMenuBook size={20} />
      </BookIcon>
      <CardName>{name}</CardName>
      <ListStyled>
        <ListItemStyled>
          <ListItemName>Author:</ListItemName>
          <span>{author}</span>
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
              {Array(rating).fill(<AiFillStar size={17} />)}
              {Array(5 - rating).fill(<AiOutlineStar size={17} />)}
            </RatingIcon>
          </ListItemStyled>
        )}
      </ListStyled>
      {isRead && (
        <Button
          className={'resume-card-button'}
          label={'Resume'}
          onClick={onResumeClick}
        />
      )}
    </CardStyled>
  );
};

export default Card;
