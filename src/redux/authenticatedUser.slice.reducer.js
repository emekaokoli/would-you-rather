import { createSlice } from '@reduxjs/toolkit';

const authUserSlice = createSlice({
  name: 'authendUser',
  initialState: null,
  reducers: {
    authenticatedUsers: (state, action) => (state = action.payload),
  },
});

export const { authenticatedUsers } = authUserSlice.actions;

export const getAuthenticatedUsers = (state) => state.authenticatedUsers;

export default authUserSlice.reducer;
