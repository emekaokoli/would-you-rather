import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';
import {
  getCurrentQuestions,
  getSortedQuestionsIDs,
} from '../redux/questions.slice.reducers';
import { Preview } from './Preview';

export const Dashboard = () => {
  const questions = useSelector(getCurrentQuestions);
  const questionsSortedById = useSelector(getSortedQuestionsIDs);
  const user = useSelector((state) => state.users);
  const { users } = user;

  const auth = useSelector((state) => state.auth);
  const { authedUser } = auth;

  const [viewAnsweredQuestions, setViewAnsweredQuestions] = useState(false);

  const questionsAnsweredByAuthedUser = Object.keys(users[authedUser].answers);

  const answeredQuestionsList = questionsSortedById.filter((question) =>
    questionsAnsweredByAuthedUser.includes(question),
  );

  const notAnsweredQuestionsList = questionsSortedById.filter(
    (question) => !answeredQuestionsList.includes(question),
  );

  const returnPreviewCards = (questionsArray) => {
    if (questionsArray.length === 0) {
      return <h3 className='mt-3 text-danger'>No questions to show</h3>;
    }
    return (
      <ListGroup as='ul' className='contact-list'>
        {questionsArray.map((questionID) => {
          const questionAuthor = users[questions[questionID].author].name;
          const authorsID = questions[questionID].author;
          const questionPreview = questions[questionID].optionOne.text;
          return (
            <Preview
              key={questionID}
              id={questionID}
              avatar={users[authorsID].avatarURL}
              questionAuthor={questionAuthor}
              questionPreview={questionPreview}
            />
          );
        })}
      </ListGroup>
    );
  };

  return (
    <Container fluid='md' className='w-50  border p-0 overflow-hidden'>
      <Row>
        <Button
          className='w-50'
          variant='success'
          active={!viewAnsweredQuestions}
          onClick={() => setViewAnsweredQuestions(false)}
        >
          Unanswered Questions
        </Button>
        <Button
          className='w-50'
          variant='success'
          active={viewAnsweredQuestions}
          onClick={() => setViewAnsweredQuestions(true)}
        >
          Answered Questions
        </Button>
      </Row>
      {viewAnsweredQuestions
        ? returnPreviewCards(answeredQuestionsList)
        : returnPreviewCards(notAnsweredQuestionsList)}
    </Container>
  );
};
