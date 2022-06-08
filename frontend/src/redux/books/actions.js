import { createAction } from '@reduxjs/toolkit';

const update = createAction('books/update');
const add = createAction('books/add');

const actions = { update, add };

export default actions;
