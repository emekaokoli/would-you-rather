import * as API from '../services/_DATA';
import { createSlice } from '@reduxjs/toolkit';

export const questionSlice = createSlice({
  name: 'Fetch_questions',
  initialState: {
    loading: true,
    error: null,
    quesions: [],
  },

  reducers: {
    questionsLoading: (state, action) => {
      if (state.loading) {
        state.loading = true;
        state.error = null;
        state.quesions = [];
      }
    },
    questionsSuccess: (state, action) => {
      state.loading = false;
      state.error = null;
      state.quesions = action.payload;
    },
    questionsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.quesions = [];
    },
  },
});

// Actions
export const getAllQuestions = () => async (dispatch) => {
  dispatch(questionsLoading());
  try {
    const response = await API._getQuestions();

    console.log(response);
    dispatch(questionsSuccess(response));
  } catch (error) {
    console.error(error);
    dispatch(questionsFail(error.message));
  }
};

export const { questionsLoading, questionsSuccess, questionsFail } =
  questionSlice.actions;

export default questionSlice.reducer;
