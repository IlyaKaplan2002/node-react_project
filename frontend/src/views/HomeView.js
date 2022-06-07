import React from 'react';
import HelpInfoMobile from 'components/HelpInfoMobile';
import NonAuthHeader from 'components/NonAuthHeader';
import StartTrainingEmptyMobile from '../components/StartTraining';


const HomeView = () => {
  return (
    <>
      {/* <NonAuthHeader />
      <HelpInfoMobile />       */}
      
      <StartTrainingEmptyMobile></StartTrainingEmptyMobile>
    </>
  );
};

export default HomeView;
