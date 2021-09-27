import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getInitialData,
  saveQuestion,
  saveQuestionAnswer,
} from '../services/api';
import { receiveUsers } from './users.slice.reducers';

const initialState = {
  loading: false,
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
  async ({ newQuestionInfo }, thunkAPI) => {
    const question = await saveQuestion(newQuestionInfo);
    return question;
  },
);

export const handleSaveNewAnswer = createAsyncThunk(
  'SaveAnswer/handleSaveNewAnswer',
  async ({ info }, thunkAPI) => {
    const newAnswer = await saveQuestionAnswer(info);
    return newAnswer;
  },
);

export const questionSlice = createSlice({
  name: 'QUESTIONS',
  initialState,

  reducers: {
    receiveQuestionsLoading: (state, action) => {},
    receiveQuestions: (state, action) => {},
    addQuestion: (state, action) => {
      //state.questions.questions[action.payload.id] = action.payload;
    },
    addAnswer: (state, action) => {},
    receieveQuestionsFail: (state, action) => {},
    reset: (state) => {
      return { ...initialState };
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestionsandUsers.pending, (state, action) => {
        if (!state.loading) {
          state.loading = true;
          state.error = null;
          state.questions = [];
        }
      })
      .addCase(fetchQuestionsandUsers.fulfilled, (state, action) => {
        if (state.loading === true) {
          state.loading = false;
          state.error = null;
          state.questions.push(action.payload);
        }
      })
      .addCase(fetchQuestionsandUsers.rejected, (state, action) => {
        if (state.loading === true) {
          state.loading = false;
          state.error = action.payload;
          state.questions = [];
        }
      })
      .addCase(handleSaveNewQuestion.fulfilled, (state, action) => {
        if (state.loading === true) {
          state.loading = false;
          state.error = null;
          state.questions[action.payload.id] = {
            ...state.questions.questions,
            ...action.payload,
          };
        }
      })
      .addCase(handleSaveNewQuestion.rejected, (state, action) => {
        if (state.loading === true) {
          state.loading = false;
          state.error = action.payload;
          state.questions = [];
        }
      })
      .addCase(handleSaveNewAnswer.fulfilled, (state, action) => {
        if (state.loading === true) {
          state.loading = false;
          state.error = null;
          state[action.payload.id] = action.payload;
        }
      })
      .addCase(handleSaveNewAnswer.rejected, (state, action) => {
        if (state.loading === true) {
          state.loading = false;
          state.error = action.payload;
          state.questions = [];
        }
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

export const sellectAllQuestions = state => state.questions.questions;


export const getSortedQuestionsIDs = (state) => {
  return Object.keys(state.questions.questions).sort(
    (a, b) =>
      state.questions.questions[b].timestamp -
      state.questions.questions[a].timestamp,
  );
};

export default questionSlice.reducer;
