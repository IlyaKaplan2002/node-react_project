import { cardTypes } from 'constants';

const getAlreadyRead = state => state.books[cardTypes.alreadyRead];
const getReading = state => state.books[cardTypes.reading];
const getGoingToRead = state => state.books[cardTypes.goingToRead];

const actions = {
  getAlreadyRead,
  getReading,
  getGoingToRead,
};

export default actions;
