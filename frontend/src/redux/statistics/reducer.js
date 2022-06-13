import { createReducer } from '@reduxjs/toolkit';
import { isAfter, isBefore, isSameDay } from 'date-fns';
import actions from './actions';

const initialState = { items: [] };

const reducer = createReducer(initialState, {
  [actions.init]: (state, action) => {
    const { training, statistics } = action.payload;

    const { start, end } = training;

    const newItems = [];

    statistics.forEach(item => {
      if (
        (isBefore(new Date(item.date), new Date(end)) ||
          isSameDay(new Date(item.date), new Date(end))) &&
        (isAfter(new Date(item.date), new Date(start)) ||
          isSameDay(new Date(item.date), new Date(start)))
      ) {
        newItems.push(item);
      }
    });

    return { ...state, items: newItems };
  },
  [actions.add]: (state, action) => ({
    ...state,
    items: [...state.items, action.payload],
  }),
});

export default reducer;
