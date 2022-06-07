import { _axios, getData } from 'api/helpers';

const signUp = user => _axios.post('/api/auth/signup', user).then(getData);

export default signUp;
