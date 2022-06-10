import { createReducer } from '@reduxjs/toolkit';
import actions from './actions';

const initialState = { items: [] };

const reducer = createReducer(initialState, {
  [actions.init]: (state, action) => {
    const items = action.payload;
    return { ...state, items: [...items] };
  },
});

export default reducer;
