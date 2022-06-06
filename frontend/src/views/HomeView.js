import React from 'react';
import HelpInfoMobile from 'components/HelpInfoMobile';
import NonAuthHeader from 'components/NonAuthHeader';
import Media from 'react-media';
import { Navigate } from 'react-router-dom';
import { routes } from 'constants';

const HomeView = () => {
  return (
    <Media queries={{ small: { maxWidth: 767 } }}>
      {mathes =>
        mathes.small ? (
          <>
            <NonAuthHeader />
            <HelpInfoMobile />
          </>
        ) : (
          <Navigate to={routes.login.path} />
        )
      }
    </Media>
  );
};

export default HomeView;
