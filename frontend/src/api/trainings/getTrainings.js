import { getAuthHeader, getData, _axios } from 'api/helpers';

const getTrainings = token =>
  _axios.get('api/trainings', getAuthHeader(token)).then(getData);

export default getTrainings;
