import { googleAuth } from 'api/auth';
import React, { useEffect } from 'react';

const AuthGoogle = () => {
  const handleResponse = async res => {
    try {
      const result = await googleAuth(res.credential);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

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
  }, []);

  return <div id="googleReg"></div>;
};

export default AuthGoogle;
