import { getStatistics } from 'api/statistics';
import { getCurrentTraining } from 'api/trainings';
import postTraining from 'api/trainings/postTraining';
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
import { tryRefreshToken } from 'helpers';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
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
  const dispatch = useDispatch();
  const [addModalOpened, setAddModalOpened] = useState(false);
  const [done, setDone] = useState(false);
  const [wellDone, setWellDone] = useState(false);

  const onLoad = useCallback(async () => {
    const tryFunc = async tokenValue => {
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
    } catch (error) {
      tryRefreshToken(error, refreshToken, dispatch, tryFunc);
    }
  };

  return (
    <Container>
      <AppBar />
      {addModalOpened ? (
        <TrainingFormModal onCloseModal={toggleAddModal} />
      ) : (
        <TrainingStyled isCurrent={isCurrent}>
          {isCurrent && (
            <>
              <YearTimer className="yearTimer" />
              <GoalsTimer
                date={training.end}
                className="goalsTimer"
                onEnd={toggleWellDone}
              />
            </>
          )}
          <div className="goalsWrapper">
            <MyGoalsSection />
          </div>
          <div className="cardsWrapper">
            {!Boolean(selectedTraining?.books.length) && !isCurrent && (
              <CardSectionNotActive
                cardType={trainingCardTypes.withoutDelEmpty}
              />
            )}

            {Boolean(selectedTraining?.books.length) && (
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

          {Boolean(selectedTraining?.books.length) && (
            <Button filled className="button" onClick={addTraining}>
              Start traininig
            </Button>
          )}

          <Chart />

          {isCurrent && <Result openWellDone={toggleDone} />}

          {!isCurrent && <AddButton onClick={toggleAddModal} />}
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
  );
};

export default Training;
