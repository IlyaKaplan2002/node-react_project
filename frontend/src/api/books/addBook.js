import { getAuthHeader, getData, _axios } from 'api/helpers';

const addBook = (token, book) =>
  _axios.post('/api/books', book, getAuthHeader(token)).then(getData);

export default addBook;
