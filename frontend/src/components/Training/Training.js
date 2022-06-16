import { getAllBooks } from 'api/books';
import { getStatistics } from 'api/statistics';
import { getCurrentTraining } from 'api/trainings';
import { postTraining } from 'api/trainings';
import AddTrainingForm from 'components/AddTrainingForm';
import AppBar from 'components/AppBar';
import CardSectionNotActive from 'components/CardSectionNotActive';
import Chart from 'components/Chart';
import Done from 'components/Done';
import GoalsTimer from 'components/GoalsTimer';
import MyGoalsSection from 'components/MyGoalsSection';
import Result from 'components/Result';
import AddButton from 'components/reusableComponents/AddButton';
import Button from 'components/reusableComponents/Button';
import TrainingFormModal from 'components/TrainingFormModal';
import WellDone from 'components/WellDone';
import YearTimer from 'components/YearTimer';
import { trainingCardTypes } from 'constants';
import {
  addDays,
  eachDayOfInterval,
  isAfter,
  isBefore,
  isFuture,
  isSameDay,
  isValid,
} from 'date-fns';
import { notifyError, tryRefreshToken } from 'helpers';
import { Notify } from 'notiflix';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useCallback } from 'react';
import Media from 'react-media';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import { booksActions, booksSelectors } from 'redux/books';
import { statisticsActions } from 'redux/statistics';
import { trainingsActions, trainingsSelectors } from 'redux/trainings';
import { Container } from 'styles';
import TrainingStyled from './Training.styled';

const Training = () => {
  const token = useSelector(authSelectors.getToken);
  const refreshToken = useSelector(authSelectors.getRefreshToken);
  const selectedTraining = useSelector(trainingsSelectors.getSelectedTraining);
  const training = useSelector(trainingsSelectors.getTraining);
  const isCurrent = useSelector(trainingsSelectors.getIsCurrent);
  const reading = useSelector(booksSelectors.getReading);
  const goingToRead = useSelector(booksSelectors.getGoingToRead);
  const dispatch = useDispatch();
  const [addModalOpened, setAddModalOpened] = useState(false);
  const [done, setDone] = useState(false);
  const [wellDone, setWellDone] = useState(false);

  const onLoad = useCallback(async () => {
    const tryFunc = async tokenValue => {
      const { books } = await getAllBooks(tokenValue);
      dispatch(booksActions.init(books));
      const { training } = await getCurrentTraining(tokenValue);
      dispatch(trainingsActions.init(training));
      const { statistic } = await getStatistics(tokenValue);
      dispatch(statisticsActions.init({ training, statistics: statistic }));
    };

    try {
      await tryFunc(token);
    } catch (error) {
      tryRefreshToken(error, refreshToken, dispatch, tryFunc);
    }
  }, [token, refreshToken, dispatch]);

  useEffect(() => {
    onLoad();
  }, [onLoad]);

  const toggleAddModal = () => setAddModalOpened(prev => !prev);
  const toggleDone = () => setDone(prev => !prev);
  const toggleWellDone = () => setWellDone(prev => !prev);

  const addTraining = async () => {
    console.log(selectedTraining);
    if (!selectedTraining?.start) {
      notifyError('Start date is required');
      return;
    }
    if (!selectedTraining?.end) {
      notifyError('End date is required');
      return;
    }

    console.log('isFuture', isFuture(new Date(selectedTraining.start)));
    console.log(
      'isSame',
      isSameDay(new Date(), new Date(selectedTraining.start))
    );

    if (
      !(
        isFuture(new Date(selectedTraining.start)) ||
        isSameDay(new Date(), new Date(selectedTraining.start))
      )
    ) {
      notifyError('Please select start day today or future');
      return;
    }

    if (
      !isAfter(
        new Date(selectedTraining.end),
        new Date(selectedTraining.start)
      ) &&
      !(
        isSameDay(
          addDays(new Date(selectedTraining.start), 30),
          new Date(selectedTraining.end)
        ) ||
        isBefore(
          new Date(selectedTraining.end),
          addDays(new Date(selectedTraining.start), 30)
        )
      )
    ) {
      notifyError(
        'Please select end day later than start and not later than 30 day from start'
      );
      return;
    }

    const getDaysAmount = () => {
      if (
        selectedTraining?.start &&
        isValid(new Date(selectedTraining.start)) &&
        selectedTraining?.end &&
        isValid(new Date(selectedTraining.end)) &&
        isFuture(new Date(selectedTraining.start))
      ) {
        return eachDayOfInterval({
          start: new Date(),
          end: new Date(selectedTraining.start),
        }).reduce(acc => acc + 1, 0);
      } else {
        return 0;
      }
    };

    const tryFunc = async tokenValue => {
      await postTraining(tokenValue, {
        ...selectedTraining,
        books: selectedTraining.books.map(book => book._id),
      });

      dispatch(trainingsActions.addTraining(selectedTraining));

      const { statistic } = await getStatistics(tokenValue);

      dispatch(
        statisticsActions.init({
          statistics: statistic,
          training: selectedTraining,
        })
      );
    };

    try {
      await tryFunc(token);
      if (getDaysAmount())
        Notify.success(`Your training will start in ${getDaysAmount()} days`);
    } catch (error) {
      tryRefreshToken(error, refreshToken, dispatch, tryFunc);
    }
  };

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
          {addModalOpened && !matches.large ? (
            <TrainingFormModal onCloseModal={toggleAddModal} />
          ) : (
            <TrainingStyled isCurrent={isCurrent}>
              <div className="topWrapper">
                {!isCurrent && (
                  <div className="goalsWrapper">
                    <MyGoalsSection />
                  </div>
                )}
                {isCurrent ? (
                  <div className="timersWrapper">
                    <YearTimer className="yearTimer" />
                    <GoalsTimer
                      date={training.end}
                      className="goalsTimer"
                      onEnd={toggleWellDone}
                    />
                  </div>
                ) : (
                  <>
                    {matches.large && (
                      <AddTrainingForm
                        desktop
                        books={[
                          ...reading.map(book => ({ ...book, id: book._id })),
                          ...goingToRead.map(book => ({
                            ...book,
                            id: book._id,
                          })),
                        ]}
                      />
                    )}
                  </>
                )}
                {isCurrent && (
                  <div className="goalsWrapper">
                    <MyGoalsSection />
                  </div>
                )}
              </div>
              <div className="cardsWrapper">
                {!Boolean(selectedTraining?.books?.length) && !isCurrent && (
                  <CardSectionNotActive
                    cardType={trainingCardTypes.withoutDelEmpty}
                  />
                )}

                {Boolean(selectedTraining?.books?.length) && (
                  <CardSectionNotActive
                    cardType={trainingCardTypes.withDel}
                    books={selectedTraining.books}
                  />
                )}

                {isCurrent && (
                  <CardSectionNotActive
                    cardType={trainingCardTypes.started}
                    books={training.books}
                  />
                )}
              </div>

              {Boolean(selectedTraining?.books?.length) &&
                Boolean(selectedTraining?.start) &&
                Boolean(selectedTraining?.end) && (
                  <Button filled className="startButton" onClick={addTraining}>
                    Start traininig
                  </Button>
                )}

              <div className="bottomWrapper">
                <Chart />

                {isCurrent && <Result openWellDone={toggleDone} />}
              </div>

              {!isCurrent && matches.small && (
                <AddButton onClick={toggleAddModal} />
              )}
            </TrainingStyled>
          )}
          {done && <Done onCloseModal={toggleDone} />}
          {wellDone && (
            <WellDone
              onCloseModal={toggleWellDone}
              onNewTrainingClick={() => {
                toggleWellDone();
                toggleAddModal();
              }}
            />
          )}
        </Container>
      )}
    </Media>
  );
};

export default Training;
