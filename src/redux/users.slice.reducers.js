import * as API from '../services/_DATA';
import { createSlice } from '@reduxjs/toolkit';

export const usersSlice = createSlice({
  name: 'Fetch_Users',
  initialState: {
    loading: true,
    error: null,
    isLogedIn: false,
    users: [],
  },

  reducers: {
    usersLoading: (state, action) => {
      if (state.loading) {
        state.loading = true;
        state.error = null;
        state.isLogedIn = false;
        state.users = [];
      }
    },
    usersSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.isLogedIn = true;
      state.users = action.payload;
    },
    usersFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isLogedIn = false;
      state.isLogedOut = false;
      state.users = [];
    },
  },
});

// Actions
export const getAllUsers = () => async (dispatch) => {
  dispatch(usersLoading());
  try {
    const response = await API._getUsers();

    console.log(response);
    dispatch(usersSuccess(response));
  } catch (error) {
    console.error(error);
    dispatch(usersFail(error.message));
  }
};

export const { usersLoading, usersSuccess, usersFail } = usersSlice.actions;

export default usersSlice.reducer;
