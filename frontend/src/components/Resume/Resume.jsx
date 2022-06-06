import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import StarRatings from 'react-star-ratings';
import {
  ResumeContainerStyled,
  TextStyled,
  TextAreaStyled,
} from './Resyme.styled';
import Button from 'components/utils/Button';

const modalRoot = document.querySelector('#modal-root');

const Resume = ({ onCloseModal }) => {
  const [rating, setRaning] = useState(0);
  const [value, setValue] = useState('');

  useEffect(() => {
    window.addEventListener('keydown', onCloseModalClick);
    return () => {
      window.removeEventListener('keydown', onCloseModalClick);
    };
  });

  const onCloseModalClick = evt => {
    if (evt.code === 'Escape') {
      onCloseModal();
    }
  };

  const onBackdropClick = evt => {
    if (evt.target === evt.currentTarget) {
      onCloseModal();
    }
  };

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

  return createPortal(
    <ResumeContainerStyled>
      <TextStyled>Choose rating of the book</TextStyled>
      <StarRatings
        rating={rating}
        starRatedColor="orange"
        changeRating={changeRating}
        starDimension="17px"
        name="rating"
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
          <Button type="button" className="button" onClick={onBackdropClick}>
            Back
          </Button>
          <Button type="submit" filled className="button">
            Save
          </Button>
        </div>
      </form>
    </ResumeContainerStyled>,
    modalRoot
  );
};
export default Resume;
