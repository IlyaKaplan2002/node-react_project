import { createAction } from '@reduxjs/toolkit';

const init = createAction('books/init');
const update = createAction('books/update');
const add = createAction('books/add');

const actions = { init, update, add };

export default actions;
