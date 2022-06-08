import { getAllBooks } from 'api/books';
import AddBookModal from 'components/AddBookModal';
import AppBar from 'components/AppBar';
import CardSection from 'components/CardSection';
import AddButton from 'components/utils/AddButton';
import { cardTypes } from 'constants';
import { notifyError } from 'helpers';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { booksActions, booksSelectors } from 'redux/books';
import LibraryStyled from './Library.styled';

const Library = () => {
  const [addModalOpened, setIsModalOpened] = useState(true);

  const alreadyRead = useSelector(booksSelectors.getAlreadyRead);
  const reading = useSelector(booksSelectors.getReading);
  const goingToread = useSelector(booksSelectors.getGoingToRead);
  const token = useSelector(authSelectors.getToken);
  const dispatch = useDispatch();

  const fetchAllBooks = useCallback(async () => {
    try {
      const { books } = await getAllBooks(token);
      dispatch(booksActions.update(books));
    } catch (error) {
      notifyError(error);
    }
  }, [token, dispatch]);

  useEffect(() => {
    fetchAllBooks();
  }, [fetchAllBooks]);

  const toggleAddBookModal = () => setIsModalOpened(prev => !prev);

  return (
    <>
      <AppBar />
      {addModalOpened ? (
        <AddBookModal onClose={toggleAddBookModal} />
      ) : (
        <>
          <LibraryStyled>
            <CardSection
              className="cards"
              cardType={cardTypes.alreadyRead}
              books={alreadyRead}
            />
            <CardSection
              className="cards"
              cardType={cardTypes.reading}
              books={reading}
            />
            <CardSection
              className="cards"
              cardType={cardTypes.goingToRead}
              books={goingToread}
            />
          </LibraryStyled>
          <AddButton onClick={toggleAddBookModal} />
        </>
      )}
    </>
  );
};

export default Library;
