import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth';
import { booksReducer } from './books';
import { statisticsReducer } from './statistics';
import { trainingsReducer } from './trainings';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'refreshToken'],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  books: booksReducer,
  trainings: trainingsReducer,
  statistics: statisticsReducer,
});

export default rootReducer;
