import { createReducer } from '@reduxjs/toolkit';
import actions from './actions';

const initialState = [];

const reducer = createReducer(initialState, {
  [actions.init]: (state, action) => {
    const stat = action.payload;
    return { ...state, stat };
  },
});

export default reducer;
