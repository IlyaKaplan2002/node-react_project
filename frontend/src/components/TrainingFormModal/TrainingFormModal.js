import React, { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { tryRefreshToken } from 'helpers';
import { trainingCardTypes } from 'constants';
import { getAllBooks } from 'api/books';
import { authSelectors } from 'redux/auth';
import { trainingsSelectors } from 'redux/trainings';
import { booksActions, booksSelectors } from 'redux/books';
import AddTrainingForm from 'components/AddTrainingForm';
import CardSectionNotActive from 'components/CardSectionNotActive';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { OverlayStyled, ModalStyled } from './TrainingFormModal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onCloseModal = () => {} }) => {
  const token = useSelector(authSelectors.getToken);
  const refreshTokenValue = useSelector(authSelectors.getRefreshToken);
  const dispatch = useDispatch();
  const reading = useSelector(booksSelectors.getReading);
  const goingToRead = useSelector(booksSelectors.getGoingToRead);
  const selectedBooks = useSelector(trainingsSelectors.getSelectedBooks);

  const onLoad = useCallback(async () => {
    const tryFunc = async tokenValue => {
      const { books } = await getAllBooks(tokenValue);
      dispatch(booksActions.init(books));
    };
    try {
      await tryFunc(token);
    } catch (error) {
      tryRefreshToken(error, refreshTokenValue, dispatch, tryFunc);
    }
  }, [token, refreshTokenValue, dispatch]);

  useEffect(() => {
    onLoad();
  }, [onLoad]);

  return createPortal(
    <OverlayStyled>
      <ModalStyled>
        <HiOutlineArrowNarrowLeft
          onClick={onCloseModal}
          className="back"
          size={24}
        />
        <AddTrainingForm
          closeModal={onCloseModal}
          books={[
            ...reading.map(book => ({ ...book, id: book._id })),
            ...goingToRead.map(book => ({ ...book, id: book._id })),
          ]}
        />

        {Boolean(selectedBooks.length) && (
          <div className="cardsWrapper">
            <CardSectionNotActive
              cardType={trainingCardTypes.withDel}
              books={selectedBooks}
            />
          </div>
        )}
      </ModalStyled>
    </OverlayStyled>,
    modalRoot
  );
};

export default Modal;
