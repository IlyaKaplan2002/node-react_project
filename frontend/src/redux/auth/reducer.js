import { createReducer } from '@reduxjs/toolkit';
import actions from './actions';

const initialState = { token: '', user: { email: '', name: '' } };

const reducer = createReducer(initialState, {
  [actions.login]: (_, action) => ({
    token: action.payload.token,
    user: { ...action.payload.user },
  }),
  [actions.info]: (state, action) => ({
    ...state,
    user: { ...action.payload.user },
  }),
  [actions.logout]: () => initialState,
});

export default reducer;
