import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import questions from './questions.slice.reducers';
import users from './users.slice.reducers';
import auth from './authenticateUser.slice.reducer';

const reducers = combineReducers({
  questions,
  users,
  auth,
});

export const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});
