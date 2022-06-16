import { createReducer } from '@reduxjs/toolkit';
import actions from './actions';
import { cardTypes } from 'constants';
import { authActions } from 'redux/auth';

const initialState = {
  [cardTypes.alreadyRead]: [],
  [cardTypes.reading]: [],
  [cardTypes.goingToRead]: [],
};

const reducer = createReducer(initialState, {
  [authActions.logout]: () => initialState,
  [actions.init]: (state, action) => {
    const newBooks = action.payload;
    const newAlreadyRead = [];
    const newReading = [];
    const newGoingToRead = [];
    newBooks.forEach(book => {
      if (book.status === cardTypes.alreadyRead) newAlreadyRead.push(book);
      if (book.status === cardTypes.reading) newReading.push(book);
      if (book.status === cardTypes.goingToRead) newGoingToRead.push(book);
    });

    return {
      ...state,
      [cardTypes.alreadyRead]: [...newAlreadyRead],
      [cardTypes.reading]: [...newReading],
      [cardTypes.goingToRead]: [...newGoingToRead],
    };
  },
  [actions.update]: (state, action) => {
    const { status, _id: bookId } = action.payload;

    const booksGroup = [...state[status]];
    const newBooks = booksGroup.map(book => {
      if (book._id !== bookId) return book;
      return action.payload;
    });
    return { ...state, [status]: [...newBooks] };
  },
  [actions.add]: (state, action) => {
    const status = action.payload.status;
    return { ...state, [status]: [action.payload, ...state[status]] };
  },
});

export default reducer;
