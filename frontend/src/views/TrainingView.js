import React from 'react';
import { Helmet } from 'react-helmet';
import Training from 'components/Training';

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
