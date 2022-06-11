import { getAuthHeader, getData, _axios } from 'api/helpers';

const addStatistics = (token, statistics) =>
  _axios.post('/api/books', statistics, getAuthHeader(token)).then(getData);

export default addStatistics;
