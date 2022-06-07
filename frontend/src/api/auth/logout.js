import { getAuthHeader, _axios } from 'api/helpers';

const logout = token => _axios.get('/api/auth/logout', getAuthHeader(token));

export default logout;
