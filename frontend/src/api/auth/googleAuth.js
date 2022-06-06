import { getData, _axios } from 'api/helpers';

const googleAuth = token =>
  _axios.post('/api/auth/google', { token }).then(getData);

export default googleAuth;
