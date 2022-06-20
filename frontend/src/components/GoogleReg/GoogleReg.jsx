import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { notifyError } from 'helpers';
import { googleAuth } from 'api/auth';
import { authActions } from 'redux/auth';

const AuthGoogle = ({ className }) => {
  const dispatch = useDispatch();

  const handleResponse = useCallback(
    async res => {
      try {
        const result = await googleAuth(res.credential);
        dispatch(authActions.login(result));
      } catch (error) {
        notifyError(error);
      }
    },
    [dispatch]
  );

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: handleResponse,
    });

    google.accounts.id.renderButton(document.getElementById('googleReg'), {
      width: 150,
      text: 'signin',
      logo_alignment: 'left',
      locale: 'en',
    });
  }, [handleResponse]);

  return <div className={className} id="googleReg"></div>;
};

export default AuthGoogle;
