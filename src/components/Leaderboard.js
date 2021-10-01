import React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { LeaderBoardCard } from './LeaderBoardCard';

export const LeaderBoard = () => {
  const { users } = useSelector((state) => state.users);

  const sortedUsers = () => {
    const usersWithScores = Object.values(users).map((user) => {
      const answeredQuestions = Object.keys(user.answers).length;
      const createdQuestions = user.questions.length;
      const score = answeredQuestions + createdQuestions;
      return {
        ...user,
        score,
      };
    });
    return usersWithScores.sort((a, b) => b.score - a.score);
  };

  return (
    <Container fluid='md'>
      {sortedUsers().map((user) => {
        const answeredQuestions = Object.keys(user.answers).length;
        const createdQuestions = user.questions.length;
        const { id, avatarURL, name } = user;
        return (
          <LeaderBoardCard
            key={id}
            avatar={avatarURL}
            user={name}
            answeredQuestions={answeredQuestions}
            createdQuestions={createdQuestions}
            score={answeredQuestions + createdQuestions}
          />
        );
      })}
    </Container>
  );
};
