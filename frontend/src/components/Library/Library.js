import { getAllBooks } from 'api/books';
import AddBookModal from 'components/AddBookModal';
import AppBar from 'components/AppBar';
import CardSection from 'components/CardSection';
import InstructionModal from 'components/InstructionModal';
import Resume from 'components/Resume';
import AddButton from 'components/reusableComponents/AddButton';
import Button from 'components/reusableComponents/Button';
import { routes } from 'constants';
import { cardTypes } from 'constants';
import { tryRefreshToken } from 'helpers';
import React, { useCallback, useEffect, useState } from 'react';
import Media from 'react-media';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { authSelectors } from 'redux/auth';
import { booksActions, booksSelectors } from 'redux/books';
import { Container } from 'styles';
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
  const refreshTokenValue = useSelector(authSelectors.getRefreshToken);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchAllBooks = useCallback(async () => {
    const tryFunc = async tokenValue => {
      const { books } = await getAllBooks(tokenValue);
      if (!books.length) {
        setAddModalOpened(true);
        setInstructionModalOpened(true);
      }
      dispatch(booksActions.init(books));
    };

    try {
      await tryFunc(token);
    } catch (error) {
      tryRefreshToken(error, refreshTokenValue, dispatch, tryFunc);
    }
  }, [token, dispatch, refreshTokenValue]);

  useEffect(() => {
    fetchAllBooks();
  }, [fetchAllBooks]);

  const toggleAddBookModal = () => setAddModalOpened(prev => !prev);
  const closeInstructionModal = () => setInstructionModalOpened(false);
  const toggleResumeModal = () => setResumeModalOpened(prev => !prev);

  const goToTraining = () => navigate(routes.training.path);

  return (
    <Media
      queries={{
        small: '(max-width: 767px)',
        large: '(min-width: 768px)',
      }}
    >
      {matches => (
        <Container>
          <AppBar />
          {matches.large && <AddBookModal />}
          {addModalOpened && !matches.large ? (
            <>
              {matches.small && (
                <AddBookModal
                  modal
                  onClose={toggleAddBookModal}
                  isInstructionModalOpened={instructionModalOpened}
                />
              )}
            </>
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
                  <>
                    {matches.small ? (
                      <p className="empty">Your library is empty</p>
                    ) : (
                      <InstructionModal />
                    )}
                  </>
                )}
                {(Boolean(goingToread.length) || Boolean(reading.length)) && (
                  <Button
                    type="button"
                    onClick={goToTraining}
                    filled
                    className="training"
                  >
                    My training
                  </Button>
                )}
              </LibraryStyled>

              {matches.small && <AddButton onClick={toggleAddBookModal} />}
            </>
          )}
          {instructionModalOpened && (
            <>
              {matches.small && (
                <InstructionModal onClose={closeInstructionModal} />
              )}
            </>
          )}
          <CSSTransition
            in={resumeModalOpened}
            unmountOnExit
            classNames="modal"
            timeout={300}
          >
            <Resume
              onCloseModal={toggleResumeModal}
              bookId={resumeBookId}
              initBook={alreadyRead.find(book => book._id === resumeBookId)}
            />
          </CSSTransition>
        </Container>
      )}
    </Media>
  );
};

export default Library;
