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
    receieveUsersLoading: (state, action) => {},
    receiveUsers: (state, action) => {
      state.users = action.payload;
    },
    receiveUsersFail: (state, action) => {},
    resetUser: (state, action) => {
      return { ...initialState };
    },
  },
});

export const {
  receieveUsersLoading,
  receiveUsers,
  receiveUsersFail,
  resetUser,
} = usersSlice.actions;

export default usersSlice.reducer;
