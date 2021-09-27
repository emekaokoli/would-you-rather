import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchQuestionsandUsers,
  handleSaveNewAnswer,
} from '../redux/questions.slice.reducers';
import PropTypes from 'prop-types';

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

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(
      handleSaveNewAnswer({
        authedUser,
        qid: questionID,
        answer: selectedAnswer,
      }),
    ).then(() => dispatch(fetchQuestionsandUsers()));
  };
  return (
    <li className=' user-card w-50 mx-auto border'>
      <h5 className='card-header text-left '>{authorName} asks:</h5>
      <div className='d-flex'>
        <div
          className='contact-avatar avatar-preview'
          style={{
            backgroundImage: `url(/${authorAvatar})`,
          }}
        />
        <div className='contact-details'>
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
        </div>
      </div>
    </li>
  );
};

ViewPollVote.propTypes = {
  authorName: PropTypes.string.isRequired,
  authorAvatar: PropTypes.string.isRequired,
  optionOne: PropTypes.string.isRequired,
  optionTwo: PropTypes.string.isRequired,
  questionID: PropTypes.string.isRequired,
};
