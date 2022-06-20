import { createReducer } from '@reduxjs/toolkit';
import { isAfter, isBefore, isSameDay } from 'date-fns';
import { cardTypes } from 'constants';
import { authActions } from 'redux/auth';
import actions from './actions';

const initialState = {
  training: null,
  selectedTraining: null,
  isCurrent: false,
};

const reducer = createReducer(initialState, {
  [authActions.logout]: () => initialState,

  [actions.init]: (state, action) => {
    const training = action.payload;

    if (!training) return state;

    const isCurrent =
      (isBefore(new Date(), new Date(training.end)) ||
        isSameDay(new Date(), new Date(training.end))) &&
      (isAfter(new Date(), new Date(training.start)) ||
        isSameDay(new Date(), new Date(training.start))) &&
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
      start: action.payload?.start || state.selectedTraining?.start || null,
      end: action.payload?.end || state.selectedTraining?.end || null,
    },
  }),
});

export default reducer;
