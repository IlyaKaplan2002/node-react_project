import { getAllBooks } from 'api/books';
import AddBookModal from 'components/AddBookModal';
import AppBar from 'components/AppBar';
import CardSection from 'components/CardSection';
import InstructionModal from 'components/InstructionModal';
import Resume from 'components/Resume';
import AddButton from 'components/utils/AddButton';
import { cardTypes } from 'constants';
import { notifyError } from 'helpers';
import React, { useCallback, useEffect, useState } from 'react';
import Media from 'react-media';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { booksActions, booksSelectors } from 'redux/books';
import LibraryStyled from './Library.styled';

const Library = () => {
  const [addModalOpened, setAddModalOpened] = useState(false);
  const [instructionModalOpened, setInstructionModalOpened] = useState(false);
  const [resumeModalOpened, setResumeModalOpened] = useState(false);
  const [resumeBookId, setResumeBookId] = useState('');

  const alreadyRead = useSelector(booksSelectors.getAlreadyRead);
  const reading = useSelector(booksSelectors.getReading);
  const goingToread = useSelector(booksSelectors.getGoingToRead);
  const token = useSelector(authSelectors.getToken);
  const dispatch = useDispatch();

  const fetchAllBooks = useCallback(async () => {
    try {
      const { books } = await getAllBooks(token);
      if (!books.length) {
        setAddModalOpened(true);
        setInstructionModalOpened(true);
      }
      dispatch(booksActions.init(books));
    } catch (error) {
      notifyError(error);
    }
  }, [token, dispatch]);

  useEffect(() => {
    fetchAllBooks();
  }, [fetchAllBooks]);

  const toggleAddBookModal = () => setAddModalOpened(prev => !prev);
  const closeInstructionModal = () => setInstructionModalOpened(false);
  const toggleResumeModal = () => setResumeModalOpened(prev => !prev);

  return (
    <>
      <AppBar />
      {addModalOpened ? (
        <AddBookModal
          onClose={toggleAddBookModal}
          isInstructionModalOpened={instructionModalOpened}
        />
      ) : (
        <>
          <LibraryStyled>
            {Boolean(alreadyRead.length) ||
            Boolean(reading.length) ||
            Boolean(goingToread.length) ? (
              <>
                <CardSection
                  className="cards"
                  cardType={cardTypes.alreadyRead}
                  books={alreadyRead}
                  onResumeClick={toggleResumeModal}
                  setResumeBookId={setResumeBookId}
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
              </>
            ) : (
              <p className="empty">Your library is empty</p>
            )}
          </LibraryStyled>
          <Media
            query="(max-width:767px)"
            render={() => <AddButton onClick={toggleAddBookModal} />}
          />
        </>
      )}
      {instructionModalOpened && (
        <InstructionModal onClose={closeInstructionModal} />
      )}
      {resumeModalOpened && (
        <Resume
          onCloseModal={toggleResumeModal}
          bookId={resumeBookId}
          initBook={alreadyRead.find(book => book._id === resumeBookId)}
        />
      )}
    </>
  );
};

export default Library;
