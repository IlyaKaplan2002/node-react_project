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

const CardForStart = ({ name, author, year, pages, id, cardType, status }) => {
  const dispatch = useDispatch();
  const isReading = status === cardTypes.reading;
  const isRead = status === cardTypes.alreadyRead;
  const goingToRead = status === cardTypes.goingToRead;

  const withoutDelEmpty = cardType === trainingCardTypes.withoutDelEmpty;
  const withDel = cardType === trainingCardTypes.withDel;
  const started = cardType === trainingCardTypes.started;

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
          <EllipsisText text={name} length={10} />
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
            <ListItemName>Author:</ListItemName>
            <span>
              <EllipsisText text={author} length={10} />
            </span>
          </ListItemStyled>
          <ListItemStyled className="year">
            <ListItemName>Year:</ListItemName>
            <span>{year}</span>
          </ListItemStyled>
          <ListItemStyled className="page">
            <ListItemName>Pages:</ListItemName>
            <span>{pages}</span>
          </ListItemStyled>
        </ListStyled>
      }
    </CardStyled>
  );
};

export default CardForStart;
