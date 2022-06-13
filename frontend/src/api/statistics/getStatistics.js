import { getAuthHeader, getData, _axios } from 'api/helpers';

const getStatistics = token =>
  _axios.get('/api/statistics', getAuthHeader(token)).then(getData);

export default getStatistics;
