import { refreshToken } from 'api/auth';
import { authActions } from 'redux/auth';
import notifyError from './notifyError';

const tryRefreshToken = async (
  error,
  refreshTokenValue,
  dispatch,
  callback,
  ...args
) => {
  const message = error?.response?.data?.message || 'Error';

  try {
    if (message === 'Token is invalid') {
      notifyError('You have started another session, this session was expired');
      dispatch(authActions.logout());
    }
    if (message === 'jwt expired') {
      const data = await refreshToken(refreshTokenValue);
      dispatch(authActions.login(data));
      await callback(data.token, ...args);
    } else {
      notifyError(error);
      if (error.code === 401) dispatch(authActions.logout());
    }
  } catch (newError) {
    notifyError(newError);
    if (newError.code === 401) dispatch(authActions.logout());
  }
};

export default tryRefreshToken;
