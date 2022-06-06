import { getAuthHeader, getData, _axios } from 'api/helpers';

const getInfo = token =>
  _axios.get('/api/auth/info', getAuthHeader(token)).then(getData);

export default getInfo;
