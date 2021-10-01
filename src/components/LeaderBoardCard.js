import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import PropTypes from 'prop-types';
import { Figure } from 'react-bootstrap';

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
        <ListGroup.Item as='li' className='align-content-center'>
          <Figure className='align-content-center justify-content-center'>
            <Figure.Image width={180} height={180} alt={avatar} src={avatar} />
          </Figure>
        </ListGroup.Item>
        <ListGroup.Item as='li' className=''>
          <h5 className='card-header bg-primary text-light'>{user}</h5>
          <p className='text-left d-flex justify-content-between mt-3 font-weight-bold'>
            Answered questions<span>{answeredQuestions}</span>
          </p>
          <p className='text-left d-flex justify-content-between border-top pt-2 font-weight-bold'>
            Created questions<span>{createdQuestions}</span>
          </p>
        </ListGroup.Item>
        <ListGroup.Item
          as='li'
          className='ml-3 d-flex flex-column justify-content-between'
        >
          <h6 className='card-header bg-primary text-light'>Score</h6>
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
