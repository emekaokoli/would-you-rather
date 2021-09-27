import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const initialState = {
  authedUser: null,
  error: null,
};
export const getAuthenticatedUser = createAsyncThunk(
  'AuthenticateUsers/getAuthenticatedUser',
  async (payload, thunkAPI) => {
    return payload;
  },
);

export const handleResetAuth = createAsyncThunk(
  'ResetAuthenticateUsers/handleResetAuth',
  async (payload, thunkAPI) => {
    return thunkAPI.dispatch(resetAuth());
  },
);

const authUserSlice = createSlice({
  name: 'AUTHENTICATE_USER',
  initialState,

  reducers: {
    authenticate: (state, action) => {},
    authenticateFail: (state, action) => {
      //state.error = action.payload;
    },
    resetAuth: (state, action) => {
      return {
        ...initialState,
      };
    },
    authFail: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers(builder) {
    builder

      .addCase(getAuthenticatedUser.fulfilled, (state, action) => {
        state.authedUser = action.payload;
      })
      .addCase(getAuthenticatedUser.rejected, (state, action) => {
        state.authedUser = action.payload;
      });
  },
});

export const { authenticate, authenticateFail, resetAuth, authFail } =
  authUserSlice.actions;

export default authUserSlice.reducer;
