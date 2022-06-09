import getInfo from 'api/auth/getInfo';
import { notifyError } from 'helpers';
import React, { useCallback, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { authActions, authSelectors } from 'redux/auth';
import Router from './Router';

const App = () => {
  const token = useSelector(authSelectors.getToken);
  const dispatch = useDispatch();

  const getUserData = useCallback(async () => {
    try {
      const data = await getInfo(token);
      dispatch(authActions.info(data));
    } catch (error) {
      dispatch(authActions.logout());
      notifyError(error);
    }
  }, [token, dispatch]);

  useEffect(() => {
    if (token) {
      getUserData(token);
    }
  }, [token, getUserData]);

  return <Router />;
};

export default App;
