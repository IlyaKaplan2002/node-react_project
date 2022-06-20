import React from 'react';
import { Navigate } from 'react-router-dom';
import Media from 'react-media';
import { Helmet } from 'react-helmet';
import { routes } from 'constants';
import HelpInfoMobile from 'components/HelpInfoMobile';
import NonAuthHeader from 'components/NonAuthHeader';

const HomeView = () => {
  return (
    <>
      <Helmet>
        <title>Books Reading</title>
      </Helmet>
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
    </>
  );
};

export default HomeView;
