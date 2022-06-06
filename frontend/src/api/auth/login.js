import { _axios, getData } from 'api/helpers';

const login = user => _axios.post('/api/auth/login', user).then(getData);

export default login;
