import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StarRatings from 'react-star-ratings';
import { useTranslation } from 'react-i18next';
import { useBodyScroll, useOnEscClose } from 'hooks';
import { notifyError, tryRefreshToken } from 'helpers';
import { authSelectors } from 'redux/auth';
import { booksActions } from 'redux/books';
import { addResume } from 'api/books';
import Button from 'components/reusableComponents/Button';
import {
  ResumeContainerStyled,
  TextStyled,
  TextAreaStyled,
  ResumeBackdrop,
} from './Resume.styled';

const Resume = ({ onCloseModal, bookId, initBook }) => {
  const [rating, setRating] = useState(initBook.rating);
  const [value, setValue] = useState(initBook.review);
  const [error, setError] = useState('');
  const token = useSelector(authSelectors.getToken);
  const refreshTokenValue = useSelector(authSelectors.getRefreshToken);
  const dispatch = useDispatch();
  const [addOnEscClose, removeOnEscClose] = useOnEscClose(onCloseModal);
  const [buttonVisual, setButtonVisual] = useState(false);

  const { t } = useTranslation('translation', { keyPrefix: 'resume' });
  const [enable, disable] = useBodyScroll();

  useEffect(() => {
    addOnEscClose();
    enable();

    return () => {
      removeOnEscClose();
      disable();
    };
  }, [addOnEscClose, removeOnEscClose, enable, disable]);

  const onSaveModalButtonClick = async evt => {
    evt.preventDefault();

    if (!rating) {
      notifyError('Rating is required');
      return;
    }

    if (value?.length > 1000) {
      notifyError('Resume should not be more than 1000');
      return;
    }

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
    const { value } = evt.target;
    if (value.length > 1000) {
      setButtonVisual(true);
      setError('Resume should not be more than 1000');
    } else {
      setButtonVisual(false);
      setError('');
    }

    setValue(value);
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
        <TextStyled>{t('rating')}</TextStyled>
        <StarRatings
          rating={rating}
          starRatedColor="orange"
          changeRating={changeRating}
          starDimension="17px"
          name="rating"
          starSpacing="2px"
        />
        <form className="form" onSubmit={onSaveModalButtonClick}>
          <label className="label">
            <span>{t('resume')}</span>
            <TextAreaStyled
              name="textArea"
              type="text"
              placeholder="..."
              value={value}
              onChange={onChangeValue}
            />
          </label>
          {error ? (
            <p className="residue residueError">{value?.length || 0}</p>
          ) : (
            <p className="residue">{value?.length || 0}/1000</p>
          )}
          <div className="buttonContainer">
            <Button
              type="button"
              className="button btnWhite"
              onClick={onCloseModal}
            >
              {t('back')}
            </Button>
            <Button
              type="submit"
              filled
              className="button btnOrange"
              disabled={buttonVisual}
            >
              {t('save')}
            </Button>
          </div>
        </form>
      </ResumeContainerStyled>
    </ResumeBackdrop>
  );
};
export default Resume;
