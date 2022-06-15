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
      if (error.code === 401) dispatch(authActions.logout());
    }
  } catch (newError) {
    console.log(error);
    console.log(newError);
    notifyError(newError);
    if (newError.code === 401) dispatch(authActions.logout());
  }
};

export default tryRefreshToken;
