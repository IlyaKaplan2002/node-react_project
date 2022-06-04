import React from 'react';
import HelpInfoMobile from 'components/HelpInfoMobile';
import AppBar from 'components/AppBar';
// import NonAuthHeader from 'components/NonAuthHeader';

const HomeView = () => {
  return (
    <>
      {/* <NonAuthHeader /> */}
      <AppBar />
      <HelpInfoMobile />
    </>
  );
};

export default HomeView;
