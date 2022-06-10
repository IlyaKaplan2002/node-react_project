import React, { useEffect, useState } from 'react';
import StarRatings from 'react-star-ratings';
import {
  ResumeContainerStyled,
  TextStyled,
  TextAreaStyled,
  ResumeBackdrop,
} from './Resume.styled';
import Button from 'components/utils/Button';
import { tryRefreshToken } from 'helpers';
import { addResume } from 'api/books';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { booksActions } from 'redux/books';
import { useOnEscClose } from 'hooks';
import { disableBodyScroll } from 'body-scroll-lock';
import { enableBodyScroll } from 'body-scroll-lock';

const Resume = ({ onCloseModal, bookId, initBook }) => {
  const [rating, setRating] = useState(initBook.rating);
  const [value, setValue] = useState(initBook.review);
  const token = useSelector(authSelectors.getToken);
  const refreshTokenValue = useSelector(authSelectors.getRefreshToken);
  const dispatch = useDispatch();
  const [addOnEscClose, removeOnEscClose] = useOnEscClose(onCloseModal);

  useEffect(() => {
    addOnEscClose();
    disableBodyScroll(document.body);

    return () => {
      removeOnEscClose();
      enableBodyScroll(document.body);
    };
  }, [addOnEscClose, removeOnEscClose]);

  const onSaveModalButtonClick = async evt => {
    evt.preventDefault();
    const tryFunc = async tokenValue => {
      const { book } = await addResume(tokenValue, bookId, {
        rating,
        review: value,
      });

      dispatch(booksActions.update(book));
    };

    try {
      await tryFunc(token);
    } catch (error) {
      tryRefreshToken(error, refreshTokenValue, dispatch, tryFunc);
    }
    onCloseModal();
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
