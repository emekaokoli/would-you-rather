import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getInitialData,
  saveQuestion,
  saveQuestionAnswer,
} from '../services/api';
import { receiveUsers } from './users.slice.reducers';

const initialState = {
  loading: true,
  error: null,
  questions: [],
};

export const fetchQuestionsandUsers = createAsyncThunk(
  'questions+Users/fetchQuestionsandUsers',

  async (_, thunkAPI) => {
    const { users, questions } = await getInitialData();
    thunkAPI.dispatch(receiveUsers(users));
    return questions;
  },
);

export const handleSaveNewQuestion = createAsyncThunk(
  'SaveQuestions/handleSaveNewQuestion',
  async (newQuestionInfo, thunkAPI) => {
    return await saveQuestion(newQuestionInfo);
  },
);

export const handleSaveNewAnswer = createAsyncThunk(
  'SaveAnswer/handleSaveNewAnswer',
  async (info, thunkAPI) => {
    return await saveQuestionAnswer(info);
  },
);

export const questionSlice = createSlice({
  name: 'QUESTIONS',
  initialState,

  reducers: {
    reset: (state) => {
      return { ...initialState };
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestionsandUsers.pending, (state, action) => {
        state.loading = true;
        state.error = null;
        state.questions = null;
      })
      .addCase(fetchQuestionsandUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.questions = action.payload;
      })
      .addCase(fetchQuestionsandUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.questions = [];
      })
      .addCase(handleSaveNewQuestion.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.questions[action.payload.id] = action.payload;
      })
      .addCase(handleSaveNewQuestion.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.questions = [];
      })
      .addCase(handleSaveNewAnswer.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state[action.payload] = action.payload;
      })
      .addCase(handleSaveNewAnswer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.questions = [];
      });
  },
});

export const {
  receiveQuestionsLoading,
  receiveQuestions,
  receieveQuestionsFail,
  addQuestion,
  addAnswer,
  reset,
} = questionSlice.actions;

export const sellectAllQuestions = (state) => state.questions.questions;

export const getSortedQuestionsIDs = (state) => {
  return Object.keys(state.questions.questions).sort(
    (a, b) =>
      state.questions.questions[b].timestamp -
      state.questions.questions[a].timestamp,
  );
};

export default questionSlice.reducer;
