import { getAuthHeader, getData, _axios } from 'api/helpers';

const addResume = (token, bookId, resume) =>
  _axios
    .patch(`/api/books/${bookId}/review`, resume, getAuthHeader(token))
    .then(getData);

export default addResume;
