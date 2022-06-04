import axios from 'axios';

const { REACT_APP_API_BASE_URL } = process.env;

const googleAuth = token =>
  axios.post(REACT_APP_API_BASE_URL + '/api/auth/google', { token });

export default googleAuth;
