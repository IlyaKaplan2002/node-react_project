import { createAction } from '@reduxjs/toolkit';

const init = createAction('trainings/init');
const addSelectedBook = createAction('trainings/addSelectedBook');
const removeSelectedBook = createAction('trainings/removeSelectedBook');
const setSelectedDates = createAction('trainings/setSelectedDates');
const addTraining = createAction('trainings/addTraining');

const actions = {
  init,
  addSelectedBook,
  removeSelectedBook,
  setSelectedDates,
  addTraining,
};

export default actions;
