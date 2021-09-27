import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types';

export const LeaderBoardCard = ({
  avatar,
  user,
  answeredQuestions,
  createdQuestions,
  score,
}) => {
  return (
    <>
      <ListGroup as='ul' className='d-flex w-50 mx-auto border'>
        <ListGroup.Item
          className='contact-avatar avatar-leaderboard'
          style={{
            backgroundImage: `url(${avatar})`,
          }}
        />
        <ListGroup.Item className=''>
          <h5 className='card-header'>{user}</h5>
          <p className='text-left d-flex justify-content-between mt-3 font-weight-bold'>
            Answered questions<span>{answeredQuestions}</span>
          </p>
          <p className='text-left d-flex justify-content-between border-top pt-2 font-weight-bold'>
            Created questions<span>{createdQuestions}</span>
          </p>
        </ListGroup.Item>
        <ListGroup.Item className='ml-3 d-flex flex-column justify-content-between'>
          <h6 className='card-header'>Score</h6>
          <p className='number-circle'>{score}</p>
        </ListGroup.Item>
      </ListGroup>
    </>
  );
};

LeaderBoardCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  answeredQuestions: PropTypes.number.isRequired,
  createdQuestions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};
