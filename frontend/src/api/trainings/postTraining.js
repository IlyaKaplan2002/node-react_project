import { getAuthHeader, getData, _axios } from 'api/helpers';

const postTraining = (token, training) =>
  _axios.post('/api/trainings', training, getAuthHeader(token)).then(getData);

export default postTraining;
