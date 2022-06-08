import React from 'react';
import { MdMenuBook } from 'react-icons/md';
import { MdOutlineDelete } from 'react-icons/md';
import {MdCheckBoxOutlineBlank} from 'react-icons/md';
import {BiCheckSquare} from 'react-icons/bi';
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
  DellIcon,
} from './CardForStart.styled';
import { cardTypes } from 'constants';

const CardForStart = ({
  name,
  onResumeClick = () => {},
  author,
  year,
  pages,
  rating = 0,
  cardType,
  id,
}) => {
  const isReading = cardType === cardTypes.reading;
  const isRead = cardType === cardTypes.alreadyRead;

  const withoutDelEmpty = cardType === cardTypes.withoutDelEmpty;
  const withDel = cardType === cardTypes.withDel;
  const notChecked = cardType === cardTypes.notChecked;
  const checked = cardType === cardTypes.checked;

  return (
    <CardStyled read={isRead}>
      {(withoutDelEmpty||withDel)&&<BookIcon reading={isReading}>
        <MdMenuBook size={21} />
      </BookIcon>}
      {checked&&<BookIcon reading={checked}>
        <BiCheckSquare size={21} />
      </BookIcon>}
      {notChecked&&<BookIcon >
        <MdCheckBoxOutlineBlank size={21} />
      </BookIcon>}
      <CardNameWrapper>
        <CardName>{name}</CardName>
      </CardNameWrapper>

      {withDel&&<DellIcon reading={withDel}>
        <MdOutlineDelete size={21} />
      </DellIcon>}
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

export default CardForStart;
