
import { createSlice } from '@reduxjs/toolkit';
import { getInitialData,saveQuestion } from '../services/api';
import { getAllInitialsUsers } from './users.slice.reducers';


const initialState = {
  loading: true,
  error: null,
  quesions: [],
};

export const questionSlice = createSlice({
  name: 'QUESTIONS',
  initialState,

  reducers: {
    receiveQuestionsLoading: (state, action) => {
      if (state.loading) {
        state.loading = true;
        state.error = null;
        state.quesions = [];
      }
    },
    receiveQuestions: (state, action) => {
      state.loading = false;
      state.error = null;
      state.quesions = action.payload;
    },
    addQuestion: (state, action) => {
      state.loading = false;
      state.error = null;
      state[action.payload.id] = action.payload;

    },
    addAnswer: (state, action) => {
      state.loading = false;
      state.error = null;
      state[action.payload.id] = action.payload;
    },
    receieveQuestionsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.quesions = [];
    },
    reset: (state) => {
      return { ...initialState };
    },
  },

  extraReducers: {},
});

// Actions
export const getAllQuestions = () => async (dispatch) => {
  dispatch(receiveQuestionsLoading());
  try {
    const { users, questions } = await getInitialData();

    console.log(questions);
    dispatch(receiveQuestions(questions));
    dispatch(getAllInitialsUsers(users))
  } catch (error) {
    console.error(error);
    dispatch(receieveQuestionsFail(error.message));

  }
};

export const {
  receiveQuestionsLoading,
  receiveQuestions,
  receieveQuestionsFail,
  addQuestion,
  addAnswer,
} = questionSlice.actions;

export const handleNewQuestion = (newQuestionInfo) => async (dispatch) => {
  return saveQuestion(newQuestionInfo).then((question) =>
    dispatch(addQuestion(question)),
  );
};

export const getQuestions = (state) => state.questions;
export const getSortedQuestionsIDs = (state) => {
  return Object.keys(state.questions).sort(
    (a, b) => state.questions[b].timestamp - state.questions[a].timestamp
  );
};

export default questionSlice.reducer;
