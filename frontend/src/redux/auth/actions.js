import { createAction } from '@reduxjs/toolkit';

const login = createAction('auth/login');
const info = createAction('auth/info');
const logout = createAction('auth/logout');

const actions = {
  login,
  info,
  logout,
};

export default actions;
