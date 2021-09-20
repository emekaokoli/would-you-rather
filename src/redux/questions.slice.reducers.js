
import { createSlice } from '@reduxjs/toolkit';
import { getInitialData,saveQuestion, saveQuestionAnswer } from '../services/api';
import { getAllInitialsUsers } from './users.slice.reducers';


const initialState = {
  loading: true,
  error: null,
  questions: [],
};

export const questionSlice = createSlice({
  name: 'QUESTIONS',
  initialState,

  reducers: {
    receiveQuestionsLoading: (state, action) => {
      if (state.loading) {
        state.loading = true;
        state.error = null;
        state.questions = [];
      }
    },
    receiveQuestions: (state, action) => {
      state.loading = false;
      state.error = null;
      state.questions = action.payload;
    },
    addQuestion: (state, action) => {
      console.log('payload');
      console.log(action.payload);
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
      state.questions = [];
    },
    reset: (state) => {
      return { ...initialState };
    },
  },

  extraReducers: {},
});

// Actions for initial get request for questions and users
export const getAllData = () => async (dispatch) => {
  dispatch(receiveQuestionsLoading());
  try {
    const { users, questions } = await getInitialData();
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

export const handleSaveNewQuestion = (newQuestionInfo) => async (dispatch) => {
  console.log('submited data');
  console.log(newQuestionInfo);
  return saveQuestion(newQuestionInfo).then((question) =>
    dispatch(addQuestion(question)),
  );
};

export const handleSaveNewAnswer = (info) => async (dispatch) => {
  return saveQuestionAnswer(info).then((newAnswer) =>
    dispatch(addAnswer(newAnswer)),
  );
};

export const getCurrentQuestions = (state) => state.questions.questions;

export const getSortedQuestionsIDs = (state) => {
 
  return Object.keys(state.questions.questions).sort(
    (a, b) =>
      state.questions.questions[b].timestamp - state.questions.questions[a].timestamp,
  );
};


export default questionSlice.reducer;
