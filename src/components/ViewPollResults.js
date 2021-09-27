import React from 'react';
import { Figure, Form, ListGroup, ProgressBar } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function ViewPollResults({
  optionOne,
  selectedAnswer,
  authorAvatar,
  optionOneVotes,
  optionTwoVotes,
  authorName,
  optionTwo,
}) {
  const totalVotes = optionOneVotes + optionTwoVotes;
  const optionOnePercentage = (100 / (totalVotes / optionOneVotes)).toFixed(0);
  const optionTwoPercentage = (100 / (totalVotes / optionTwoVotes)).toFixed(0);

  return (
    <ListGroup className=' user-card w-50 mx-auto border'>
      <h5 className='card-header text-left '> Asked by {authorName}</h5>
      <ListGroup.Item className='d-flex'>
        <Figure>
          <Figure.Image
            width={120}
            height={120}
            alt={authorAvatar}
            src={`url(/${authorAvatar})`}
          />
        </Figure>
      </ListGroup.Item>

      <ListGroup.Item>
        <h5 className='text-left pt-3'>Results:</h5>
        <Form>
          <Form.Group className='card'>
            <h6 className='font-weight-light card-header'>
              {optionOne}
              {selectedAnswer === 'optionOne' && (
                <span className='selected-badge badge badge-pill badge-warning'>
                  Your answer
                </span>
              )}
            </h6>
            <ProgressBar
              animated
              now={optionOnePercentage}
              label={`${optionOnePercentage}%`}
              variant={selectedAnswer === 'optionOne' && 'warning'}
            />
            <p className='font-weight-bold'>
              {optionOneVotes} out of {totalVotes} votes
            </p>
          </Form.Group>
          <Form.Group className='card'>
            <h6 className='font-weight-light card-header'>
              {selectedAnswer === 'optionTwo' && (
                <span className='selected-badge badge badge-pill badge-warning'>
                  Your answer
                </span>
              )}
              {optionTwo}
            </h6>
            <div>
              <ProgressBar
                animated
                now={optionTwoPercentage}
                label={`${optionTwoPercentage}%`}
                variant={selectedAnswer === 'optionTwo' && 'warning'}
              />
              <p className='font-weight-bold'>
                {optionTwoVotes} out of {totalVotes} votes
              </p>
            </div>
          </Form.Group>
        </Form>
      </ListGroup.Item>
    </ListGroup>
  );
}

ViewPollResults.propTypes = {
  authorName: PropTypes.string.isRequired,
  authorAvatar: PropTypes.string.isRequired,
  optionOne: PropTypes.string.isRequired,
  optionTwo: PropTypes.string.isRequired,
  optionOneVotes: PropTypes.number.isRequired,
  optionTwoVotes: PropTypes.number.isRequired,
  selectedAnswer: PropTypes.string.isRequired,
};
