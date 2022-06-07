import React from 'react';
import { MdMenuBook } from 'react-icons/md';
import Icon from '../utils/Icon';
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
  CardNameWrapper,
  BasketButtonStyled,
  BasketIcon,
} from './CardNotActive.styled';
import { cardTypes } from 'constants';

const CardNotActive = ({
  name,
  author,
  year,
  pages,
  rating = 0,
  cardType,
  id,
  className,
  onClick,
  isCont = false,
}) => {
  const isReading = cardType === cardTypes.reading;
  const isRead = cardType === cardTypes.alreadyRead;
  return (
    <CardStyled read={isRead}>
      <BookIcon reading={isReading}>
        <MdMenuBook size={21} />
      </BookIcon>
      <CardNameWrapper>
        <CardName>{name}</CardName>
      </CardNameWrapper>
      {isCont && (
        <BasketButtonStyled
          className={className}
          cont={isCont}
          type="button"
          onClick={onClick}
        >
          <Icon className="icon" iconId="basket" />
        </BasketButtonStyled>
      )}
      <ListStyled read={isRead}>
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
    </CardStyled>
  );
};

export default CardNotActive;
