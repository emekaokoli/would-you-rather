import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import questionsSlice from './incidence.slice.reducers';
import usersSlice from './users.slice.reducers';


const persistConfig = {
  key: 'root',
  storage,
  debug: true,
};

const reducers = combineReducers({
  questionsSlice,
  usersSlice
  
});
const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});
export default store;
