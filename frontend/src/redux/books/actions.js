import { createAction } from '@reduxjs/toolkit';

const init = createAction('books/init');
const update = createAction('books/update');
const add = createAction('books/add');
const remove = createAction('books/remove');

const actions = { init, update, add, remove };

export default actions;
