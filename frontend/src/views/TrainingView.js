import Training from 'components/Training';
import React from 'react';
import { Helmet } from 'react-helmet';

const TrainingView = () => {
  return (
    <>
      <Helmet>
        <title>Training</title>
      </Helmet>
      <Training />
    </>
  );
};

export default TrainingView;
