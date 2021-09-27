import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { ViewPollResults } from './ViewPollResults';
import { ViewPollVote } from './ViewPollVote';

export default function Poll(props) {
  const { users } = useSelector((state) => state.users);
  const { questions } = useSelector((state) => state.questions);
  const { authedUser } = useSelector((state) => state.auth);

  const questionID = props.match.params.id;

  if (!questions[questionID]) {
    return <Redirect to='/error' />;
  }

  const authorID = questions[questionID].author;
  const authorName = users[questions[questionID].author].name;
  const authorAvatar = users[authorID].avatarURL;
  const optionOne = questions[questionID].optionOne.text;
  const optionTwo = questions[questionID].optionTwo.text;

  const authedUserAnswers = Object.keys(users[authedUser].answers);
  const selectedAnswer = users[authedUser].answers[questionID];

  const optionOneVotes = questions[questionID].optionOne.votes.length;
  const optionTwoVotes = questions[questionID].optionTwo.votes.length;

  if (authedUserAnswers.includes(questionID)) {
    return (
      <ViewPollResults
        authorName={authorName}
        authorAvatar={authorAvatar}
        optionOne={optionOne}
        optionTwo={optionTwo}
        optionOneVotes={optionOneVotes}
        optionTwoVotes={optionTwoVotes}
        selectedAnswer={selectedAnswer}
      />
    );
  } else {
    return (
      <ViewPollVote
        authorName={authorName}
        authorAvatar={authorAvatar}
        optionOne={optionOne}
        optionTwo={optionTwo}
        questionID={questionID}
      />
    );
  }
}
