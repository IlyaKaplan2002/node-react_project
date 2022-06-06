import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';
import {
  ResumeContainerStyled,
  TextStyled,
  TextAreaStyled,
} from './Resyme.styled';
import Button from 'components/utils/Button';

const Resume = ({ onCloseModal }) => {
  const [rating, setRaning] = useState(0);
  const [value, setValue] = useState('');

  const onSaveModalButtonClick = evt => {
    evt.preventDefault();
    console.log(value);
  };

  const onChangeValue = evt => {
    setValue(evt.target.value);
  };

  const changeRating = newRating => {
    setRaning(newRating);
  };

  return (
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
  );
};
export default Resume;
