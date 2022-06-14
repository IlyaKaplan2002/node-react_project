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
    if (message === 'jwt expired') {
      const data = await refreshToken(refreshTokenValue);
      dispatch(authActions.login(data));
      await callback(data.token, ...args);
    } else {
      notifyError(error);
      dispatch(authActions.logout());
    }
  } catch (error) {
    notifyError(error);
    dispatch(authActions.logout());
  }
};

export default tryRefreshToken;
