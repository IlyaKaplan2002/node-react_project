import CardSectionNotActive from 'components/CardSectionNotActive';
import { trainingCardTypes } from 'constants';
import React from 'react';

const TrainingView = () => {
  return (
    <>
      <CardSectionNotActive cardType={trainingCardTypes.withDel} />
    </>
  );
};

export default TrainingView;
