import getInfo from 'api/auth/getInfo';
import { tryRefreshToken } from 'helpers';
import React, { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { useDispatch, useSelector } from 'react-redux';
import { authActions, authSelectors } from 'redux/auth';
import Router from './Router';

const App = () => {
  const { i18n } = useTranslation();
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

  return (
    <>
      <div>
        <button type="button" onClick={() => i18n.changeLanguage('en')}>
          en
        </button>
        <button type="button" onClick={() => i18n.changeLanguage('ua')}>
          ua
        </button>
      </div>
      <Router />
    </>
  );
};

export default App;
