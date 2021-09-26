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
      state.error = action.payload;
    },
    resetAuth: (state, action) => {
      return {
        ...initialState,
      };
    },
    resetAuthFail: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getAuthenticatedUser.pending, (state, action) => {
        if (!state.loading) {
          state.loading = true;
          state.error = null;
          state.authedUser = [];
        }
      })
      .addCase(getAuthenticatedUser.fulfilled, (state, action) => {
        if (state.loading === true) {
          state.loading = false;
          state.error = null;
          state.authedUser = action.payload;
        }
      })
      .addCase(getAuthenticatedUser.rejected, (state, action) => {
        if (state.loading === true) {
          state.loading = false;
          state.error = null;
          state.authedUser = action.payload;
        }
      })
      .addCase(handleResetAuth.fulfilled, (state, action) => {
        if (state.loading === true) {
          state.loading = false;
          state.error = null;
          state.authedUser = action.payload;
        }
      })
      .addCase(handleResetAuth.rejected, (state, action) => {
        if (state.loading === true) {
          state.loading = false;
          state.error = null;
          state.authedUser = action.payload;
        }
      });
  },
});

export const { authenticate, authenticateFail, resetAuth, resetAuthFail } =
  authUserSlice.actions;

export default authUserSlice.reducer;
