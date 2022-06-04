import { HelpInfoMobile } from 'components/HelpInfoMobile';
import NonAuthHeader from 'components/NonAuthHeader';
import React from 'react';

import GoogleReg from 'components/GoogleReg';

const HomeView = () => {
  return (
    <>
      <GoogleReg />
      <NonAuthHeader />
      <HelpInfoMobile />
    </>
  );
};

export default HomeView;
