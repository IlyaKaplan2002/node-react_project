import { getAuthHeader, _axios } from 'api/helpers';

const deleteBook = (id, token) =>
  _axios.delete(`/api/books/${id}`, getAuthHeader(token));

export default deleteBook;
