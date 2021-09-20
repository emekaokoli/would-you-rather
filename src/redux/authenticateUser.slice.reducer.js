import { createSlice } from '@reduxjs/toolkit';
const initialState ={
    authedUser: null,
    error: null
  }
const authUserSlice = createSlice({
  name: 'AUTHENTICATE_USER',
  initialState,

  reducers: {
    authenticate: (state, action) => {
      state.authedUser = action.payload;
    },
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
});

export const { authenticate, authenticateFail, resetAuth, resetAuthFail } =
  authUserSlice.actions;

export const getAuthenticatedUser = (payload) => async (dispatch) => {
  try {
    dispatch(authenticate(payload));
  } catch (error) {
    dispatch(authenticateFail(error));
  }
};

export const handleResetAuth = () => async (dispatch) => {
  try {
    dispatch(resetAuth());
  } catch (error) {
    dispatch(resetAuthFail(error));
  }
};

export default authUserSlice.reducer;
