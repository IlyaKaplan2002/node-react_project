import React from 'react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import {
  Card,
  ListStyled,
  ListItemStyled,
  ListItemName,
  RatingIcon,
  CardButtonWrapper,
} from '../Card';
import Button from 'components/utils/Button';

const AlreadyReadCard = ({ name, onResumeClick, author, year, pages, rating = 0 }) => {
  return (
    <Card name={name} reading={false}>
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
        <ListItemStyled>
          <ListItemName>Rating:</ListItemName>
          <RatingIcon>
          {Array(rating).fill(<AiFillStar size={17} />)}
          {Array(5-rating).fill(<AiOutlineStar size={17} />)}
          </RatingIcon>
        </ListItemStyled>
      </ListStyled>
        <Button className={'resume-card-button'} label={'Resume'} onClick={onResumeClick} />
    </Card>
  );
};

export default AlreadyReadCard;
