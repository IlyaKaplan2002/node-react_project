import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tryRefreshToken } from 'helpers';
import getInfo from 'api/auth/getInfo';
import { authActions, authSelectors } from 'redux/auth';
import Router from './Router';

const App = () => {
  const token = useSelector(authSelectors.getToken);
  const refreshTokenValue = useSelector(authSelectors.getRefreshToken);
  const dispatch = useDispatch();

  const getUserData = useCallback(async () => {
    const tryFunc = async tokenValue => {
      const data = await getInfo(tokenValue);
      dispatch(authActions.info(data));
    };

    try {
      await tryFunc(token);
    } catch (error) {
      tryRefreshToken(error, refreshTokenValue, dispatch, tryFunc);
    }
  }, [token, dispatch, refreshTokenValue]);

  useEffect(() => {
    if (token) {
      getUserData(token);
    }
  }, [token, getUserData]);

  return <Router />;
};

export default App;
