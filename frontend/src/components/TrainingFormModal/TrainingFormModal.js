import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { OverlayStyled, ModalStyled } from './TrainingFormModal.styled';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import AddTrainingForm from 'components/AddTrainingForm';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { useCallback } from 'react';
import { getAllBooks } from 'api/books';
import { booksActions, booksSelectors } from 'redux/books';
import { tryRefreshToken } from 'helpers';
import { trainingsSelectors } from 'redux/trainings';
import CardSectionNotActive from 'components/CardSectionNotActive';
import { trainingCardTypes } from 'constants';
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
