import { createSlice } from '@reduxjs/toolkit';
// import { saveQuestion } from '../services/api';
// import { addQuestion,addAnswer } from './questions.slice.reducers';

const initialState = {
    loading: true,
    error: null,
    users: [],
  }

export const usersSlice = createSlice({
  name: 'USERS',
  initialState,

  reducers: {
    receieveUsersLoading: (state, action) => {
      if (state.loading) {
        state.loading = true;
        state.error = null;
        state.users = [];
      }
    },
    receiveUsers: (state, action) => {
      state.loading = false;
      state.error = null;
      //state.users = [action.payload, ...state.users];
      state.users = action.payload;
    },
    // addQuestion: (state, action) => {
    //   state.loading = false;
    //   state.error = null;
    //   state[action.payload.id] = action.payload;
    // },

    // AddAnswer: (state, action) => {
    //   state.loading = false;
    //   state.error = null;
    //   state[action.payload.id] = action.payload;
    // },
    receiveUsersFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.users = [];
    },
    resetAuthenticatedUsers: (state, action) => {
      return { ...initialState };
    },
  },
});

// Actions
export const getAllInitialsUsers = (users) => async (dispatch) => {
  dispatch(receieveUsersLoading())
  try {
    dispatch(receiveUsers(users));
  } catch (error) {
    console.error(error);
    dispatch(receiveUsersFail(error.message));
  }
};



export const { receieveUsersLoading, receiveUsers, receiveUsersFail } =
  usersSlice.actions;

  

export default usersSlice.reducer;
