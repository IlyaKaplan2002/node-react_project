import { createReducer } from '@reduxjs/toolkit';
import { cardTypes } from 'constants';
import { isAfter, isBefore } from 'date-fns';
import actions from './actions';

const initialState = {
  training: null,
  selectedTraining: null,
  isCurrent: false,
};

const reducer = createReducer(initialState, {
  [actions.init]: (state, action) => {
    const training = action.payload;

    if (!training) return state;

    const isCurrent =
      isBefore(new Date(), new Date(training.end)) &&
      isAfter(new Date(), new Date(training.start)) &&
      Boolean(
        training.books.find(
          book =>
            book.status === cardTypes.reading ||
            book.status === cardTypes.goingToRead
        )
      );

    return { ...state, training: { ...training }, isCurrent };
  },
  [actions.addTraining]: (state, action) => {
    const training = action.payload;

    if (!training) return state;

    const isCurrent =
      isBefore(new Date(), new Date(training.end)) &&
      isAfter(new Date(), new Date(training.start));

    return {
      ...state,
      selectedTraining: null,
      training: { ...training },
      isCurrent,
    };
  },
  [actions.addSelectedBook]: (state, action) => ({
    ...state,
    selectedTraining: {
      ...state.selectedTraining,
      books: [...(state.selectedTraining?.books || []), { ...action.payload }],
    },
  }),
  [actions.removeSelectedBook]: (state, action) => ({
    ...state,
    selectedTraining: {
      ...state.selectedTraining,
      books: state.selectedTraining.books.filter(
        book => action.payload !== book._id
      ),
    },
  }),
  [actions.setSelectedDates]: (state, action) => ({
    ...state,
    selectedTraining: {
      ...state.selectedTraining,
      start: action.payload.start,
      end: action.payload.end,
    },
  }),
});

export default reducer;
