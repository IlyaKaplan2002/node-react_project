import getInfo from 'api/auth/getInfo';
import { notifyError } from 'helpers';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authActions, authSelectors } from 'redux/auth';
import Router from './Router';

import Chart from 'components/Chart';

const App = () => {
  const token = useSelector(authSelectors.getToken);
  const dispatch = useDispatch();

  const getUserData = useCallback(async () => {
    try {
      const data = await getInfo(token);
      dispatch(authActions.info(data));
    } catch (error) {
      notifyError(error);
    }
  }, [token, dispatch]);

  useEffect(() => {
    if (token) {
      getUserData(token);
    }
  }, [token, getUserData]);

  return (
    <>
      <Chart />
    </>
  );
};

export default App;
