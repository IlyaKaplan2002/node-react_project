import React from 'react';
import {
  GoalsSectionStyled,
  GoalsCardWrapperStyled,
  GoalsAmount,
  GoalsAmountCard,
} from './MyGoalsSection.styled';
import Button from 'components/reusableComponents/Button';

const MyGoalsSection = ({ active }) => {
  return (
    <GoalsSectionStyled active={active}>
      <Button className="goals-button">My goals</Button>
      <GoalsCardWrapperStyled active={active}>
        <GoalsAmount active={active}>
          <GoalsAmountCard active={active}>3</GoalsAmountCard>
          Amount of books
        </GoalsAmount>
        <GoalsAmount active={active}>
          <GoalsAmountCard active={active}>28</GoalsAmountCard>
          Amount of days
        </GoalsAmount>
        {active && (
          <GoalsAmount active={active}>
            <GoalsAmountCard className="orange" active={active}>
              1
            </GoalsAmountCard>
            Books lefts
          </GoalsAmount>
        )}
      </GoalsCardWrapperStyled>
    </GoalsSectionStyled>
  );
};

export default MyGoalsSection;
