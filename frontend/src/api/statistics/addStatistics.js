import { getAuthHeader, getData, _axios } from 'api/helpers';

const addStatistics = (token, item) =>
  _axios.post('/api/statistics', item, getAuthHeader(token)).then(getData);

export default addStatistics;
