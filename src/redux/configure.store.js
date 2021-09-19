import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
//import { persistReducer } from 'redux-persist';
//import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import questionsSlice from './questions.slice.reducers';
import usersSlice from './users.slice.reducers';
import authenticatedUser from './authenticatedUser.slice.reducer';


// const persistConfig = {
//   key: 'root',
//   storage,
//   debug: true,
// };

const reducers = combineReducers({
  questions: questionsSlice,
  users: usersSlice,
  auth: authenticatedUser,
});
//const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  // reducer: persistedReducer,
  reducer: reducers,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});
