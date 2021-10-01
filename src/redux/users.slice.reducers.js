import { createSlice } from '@reduxjs/toolkit';
//import { getInitialData } from '../services/api';
// import { saveQuestion } from '../services/api';
// import { addQuestion,addAnswer } from './questions.slice.reducers';

const initialState = {
  users: [],
};

export const usersSlice = createSlice({
  name: 'USERS',
  initialState,

  reducers: {
    receiveUsers: (state, action) => {
      state.users = action.payload
    },
    resetUser: (state, action) => {
      return { ...initialState };
    },
  },
});

export const {  
  receiveUsers,
  resetUser,
} = usersSlice.actions;

export const initializeAllUsers = (state) => state.users.users;
export default usersSlice.reducer;

