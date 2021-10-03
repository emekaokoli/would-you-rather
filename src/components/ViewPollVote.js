import React, { useState } from 'react';
import { Button, Figure, Form, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchQuestionsandUsers,
  handleSaveNewAnswer,
} from '../redux/questions.slice.reducers';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';

export const ViewPollVote = ({
  authorName,
  authorAvatar,
  optionOne,
  optionTwo,
  questionID,
}) => {
  const dispatch = useDispatch();
  const { authedUser } = useSelector((state) => state.auth);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const history = useHistory();

  const onSubmit = async (e) => {
    e.preventDefault();

    await dispatch(
      handleSaveNewAnswer({
        authedUser,
        qid: questionID,
        answer: selectedAnswer,
      }),
    ).unwrap();
    await dispatch(fetchQuestionsandUsers()).then(() =>
      history.push(`/question/${questionID}`),
    );
  };
  return (
    <ListGroup as='ul' className=' user-card w-50 mx-auto border '>
      <h5 className='card-header text-left bg-primary'>{authorName} asks:</h5>
      <ListGroup.Item as='li' className='d-flex'>
        <Figure>
          <Figure.Image
            width={120}
            height={120}
            alt={authorAvatar}
            src={authorAvatar}
          />
        </Figure>
        <ListGroup.Item className='contact-details'>
          <h6 className='text-left pt-3'>Would you rather:</h6>
          <Form
            onSubmit={onSubmit}
            onChange={(e) => setSelectedAnswer(e.target.value)}
          >
            <Form.Check
              type='radio'
              label={optionOne}
              name='pollVote'
              value='optionOne'
              className='text-left'
              required
            />
            <Form.Check
              type='radio'
              label={optionTwo}
              name='pollVote'
              value='optionTwo'
              className='text-left'
              required
            />
            <Button type='submit' className='w-100 button' variant='success'>
              Submit
            </Button>
          </Form>
        </ListGroup.Item>
      </ListGroup.Item>
    </ListGroup>
  );
};

ViewPollVote.propTypes = {
  authorName: PropTypes.string.isRequired,
  authorAvatar: PropTypes.string.isRequired,
  optionOne: PropTypes.string.isRequired,
  optionTwo: PropTypes.string.isRequired,
  questionID: PropTypes.string.isRequired,
};
