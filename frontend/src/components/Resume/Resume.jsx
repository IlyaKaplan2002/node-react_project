import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';
import {
  ResumeContainerStyled,
  TextStyled,
  TextAreaStyled,
  ResumeBackdrop,
} from './Resume.styled';
import Button from 'components/utils/Button';
import { notifyError } from 'helpers';
import { addResume } from 'api/books';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

const Resume = ({ onCloseModal, bookId }) => {
  const [rating, setRating] = useState(0);
  const [value, setValue] = useState('');
  const token = useSelector(authSelectors.getToken);

  const onSaveModalButtonClick = async evt => {
    evt.preventDefault();
    try {
      const { book } = await addResume(token, bookId, {
        rating,
        review: value,
      });
      console.log(book);
    } catch (error) {
      notifyError(error);
    }
  };

  const onChangeValue = evt => {
    setValue(evt.target.value);
  };

  const changeRating = newRating => {
    setRating(newRating);
  };

  const onBackdropClick = e => {
    if (e.target !== e.currentTarget) return;
    onCloseModal();
  };

  return (
    <ResumeBackdrop onClick={onBackdropClick}>
      <ResumeContainerStyled>
        <TextStyled>Choose rating of the book</TextStyled>
        <StarRatings
          rating={rating}
          starRatedColor="orange"
          changeRating={changeRating}
          starDimension="17px"
          name="rating"
          starSpacing="2px"
        />
        <form className="form" onSubmit={onSaveModalButtonClick}>
          <label>
            <span>Resume</span>
            <TextAreaStyled
              name="textArea"
              type="text"
              placeholder="..."
              value={value}
              onChange={onChangeValue}
            />
          </label>
          <div className="buttonContainer">
            <Button type="button" className="button" onClick={onCloseModal}>
              Back
            </Button>
            <Button type="submit" filled className="button">
              Save
            </Button>
          </div>
        </form>
      </ResumeContainerStyled>
    </ResumeBackdrop>
  );
};
export default Resume;
