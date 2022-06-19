import React from 'react';
import {
  GoalsSectionStyled,
  GoalsCardWrapperStyled,
  GoalsAmount,
  GoalsAmountCard,
} from './MyGoalsSection.styled';
import Button from 'components/reusableComponents/Button';
import { useSelector } from 'react-redux';
import { trainingsSelectors } from 'redux/trainings';
import { eachDayOfInterval, isValid } from 'date-fns';
import { cardTypes } from 'constants';
import { useTranslation } from 'react-i18next';

const MyGoalsSection = () => {
  const training = useSelector(trainingsSelectors.getTraining);
  const selectedTraining = useSelector(trainingsSelectors.getSelectedTraining);
  const isCurrent = useSelector(trainingsSelectors.getIsCurrent);

  const { t } = useTranslation('translation', { keyPrefix: 'goals' });

  const getBooksAmount = () => {
    if (training && isCurrent) return training.books.reduce(acc => acc + 1, 0);
    if (selectedTraining && selectedTraining?.books)
      return selectedTraining.books.reduce(acc => acc + 1, 0);
    else return 0;
  };
  const getDaysAmount = () => {
    if (training && isCurrent)
      return eachDayOfInterval({
        start: new Date(training.start),
        end: new Date(training.end),
      }).reduce(acc => acc + 1, 0);
    if (
      selectedTraining?.start &&
      isValid(new Date(selectedTraining.start)) &&
      selectedTraining?.end &&
      isValid(new Date(selectedTraining.end))
    ) {
      return eachDayOfInterval({
        start: new Date(selectedTraining.start),
        end: new Date(selectedTraining.end),
      }).reduce(acc => acc + 1, 0);
    } else return 0;
  };

  const getAmountBooksLeft = () => {
    if (training && isCurrent)
      return training.books.reduce((acc, book) => {
        if (book.status !== cardTypes.alreadyRead) return acc + 1;
        return acc;
      }, 0);
    return 0;
  };

  return (
    <GoalsSectionStyled active={isCurrent}>
      <Button className="goals-button">{t('title')}</Button>
      <GoalsCardWrapperStyled active={isCurrent}>
        <GoalsAmount active={isCurrent}>
          <GoalsAmountCard active={isCurrent}>
            {getBooksAmount()}
          </GoalsAmountCard>
          {t('allBooks')}
        </GoalsAmount>
        <GoalsAmount active={isCurrent}>
          <GoalsAmountCard active={isCurrent}>
            {getDaysAmount()}
          </GoalsAmountCard>
          {t('allDays')}
        </GoalsAmount>
        {isCurrent && (
          <GoalsAmount active={isCurrent}>
            <GoalsAmountCard className="orange" active={isCurrent}>
              {getAmountBooksLeft()}
            </GoalsAmountCard>
            {t('booksLeft')}
          </GoalsAmount>
        )}
      </GoalsCardWrapperStyled>
    </GoalsSectionStyled>
  );
};

export default MyGoalsSection;
