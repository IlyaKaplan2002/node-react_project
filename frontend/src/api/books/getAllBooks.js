import { getAuthHeader, getData, _axios } from 'api/helpers';

const getAllBooks = token =>
  _axios.get('/api/books', getAuthHeader(token)).then(getData);

export default getAllBooks;
