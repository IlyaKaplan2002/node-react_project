import React from 'react';
import HelpInfoMobile from 'components/HelpInfoMobile';
import NonAuthHeader from 'components/NonAuthHeader';
import Chart from 'components/Chart';

const HomeView = () => {
  return (
    <>
      <Chart />
      <NonAuthHeader />
      <HelpInfoMobile />
    </>
  );
};

export default HomeView;
