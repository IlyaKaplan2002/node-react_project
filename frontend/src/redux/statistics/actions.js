import { createAction } from '@reduxjs/toolkit';

const init = createAction('statistics/init');
const add = createAction('statistics/add');

const actions = { init, add };

export default actions;
