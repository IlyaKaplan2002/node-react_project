import { combineReducers } from 'redux';
// import persistReducer from 'redux-persist/es/persistReducer';
// import storage from 'redux-persist/lib/storage';

// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

const rootReducer = combineReducers({
  //   auth: persistReducer(authPersistConfig, authReducer),
});

export default rootReducer;
