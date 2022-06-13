import { getAuthHeader, getData, _axios } from 'api/helpers';

const refreshToken = refreshToken =>
  _axios.get('/api/auth/refresh', getAuthHeader(refreshToken)).then(getData);

export default refreshToken;
