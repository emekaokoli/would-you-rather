import { createSlice } from '@reduxjs/toolkit';
//import { getInitialData } from '../services/api';
// import { saveQuestion } from '../services/api';
// import { addQuestion,addAnswer } from './questions.slice.reducers';

const initialState = {
  loading: false,
  error: null,
  users: [],
};

// export const getAllInitialsUsers = createAsyncThunk(
//   'InitialUsers/getAllInitialsUsers',
//   async ({users}, thunkAPI) => {
//     //const {users} = await getInitialData()
//     console.log(users);
//     return users;
//   },
// );
// const resetAuthenticatedUsers = createAsyncThunk(
//   'ResetUsers/resetAuthenticatedUsers',
//   async (thunkAPI) => {
//     return resetAuthenticatedUser;
//   },
// );
export const usersSlice = createSlice({
  name: 'USERS',
  initialState,

  reducers: {
    receieveUsersLoading: (state, action) => {},
    receiveUsers: (state, action) => {state.users=action.payload},
    receiveUsersFail: (state, action) => {},
    resetAuthenticatedUser: (state, action) => {
      return { ...initialState };
    },
  },
  // extraReducers(builder) {
  //   builder
  //     .addCase(getAllInitialsUsers.pending, (state, action) => {
  //       if (!state.loading) {
  //         state.loading = true;
  //         state.error = null;
  //         state.users = [];
  //       }
  //     })
  //     .addCase(getAllInitialsUsers.fulfilled, (state, action) => {
  //       if (state.loading === true) {
  //         state.loading = false;
  //         state.error = null;
  //         //state.users = [action.payload, ...state.users];
  //         state.users = action.payload;
  //       }
  //     })
  //     .addCase(getAllInitialsUsers.rejected, (state, action) => {
  //       if (state.loading === true) {
  //         state.loading = false;
  //         state.error = action.payload;
  //         state.users = [];
  //       }
  //     })
  //     .addCase(resetAuthenticatedUsers.fulfilled, (state, action) => {
  //       return { ...initialState };
  //     });
  // },
});

export const {
  receieveUsersLoading,
  receiveUsers,
  receiveUsersFail,
  resetAuthenticatedUser,
} = usersSlice.actions;

export default usersSlice.reducer;
