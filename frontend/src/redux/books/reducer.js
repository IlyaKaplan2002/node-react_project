import { createReducer } from '@reduxjs/toolkit';
import actions from './actions';
import { cardTypes } from 'constants';

const initialState = {
  [cardTypes.alreadyRead]: [],
  [cardTypes.reading]: [],
  [cardTypes.goingToRead]: [],
};

const reducer = createReducer(initialState, {
  [actions.update]: (state, action) => {
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
});

export default reducer;
