import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  getAllData,
  handleSaveNewQuestion,
} from '../redux/questions.slice.reducers';

export const NewQuestion = () => {
  const [optionOne, setOptionOne] = useState('');
  const [optionTwo, setOptionTwo] = useState('');

  const history = useHistory();

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { authedUser: author } = auth;

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(handleSaveNewQuestion({ optionOne, optionTwo, author })).then(() =>
      dispatch(getAllData()),
    );
    setOptionOne('');
    setOptionTwo('');
    history.push('/dashboard');
  };

  return (
    <Form className='mt-4' onSubmit={onSubmit}>
      {/* <Form.Group> */}
      <Form.Text className='border- p-3' as='h3'>
        Create new Question
        <hr style={{ width: '30%' }} className='m-auto mt-2' />
      </Form.Text>
      <Form.Text className=' text-left' as='h4'>
        Complete the question: Would you rather...
      </Form.Text>

      {/* </Form.Group> */}
      <Form.Group>
        <Form.Control
          type='text'
          placeholder='Question one'
          className='w-50 mx-auto text-center'
          aria-label='Question one'
          aria-describedby='Question one'
          onChange={(e) => setOptionOne(e.target.value)}
          value={optionOne}
        />
      </Form.Group>
      <Form.Text className='font-weight-bold'>OR</Form.Text>
      <Form.Group controlId='formGroupQuestionTwo'>
        <Form.Control
          type='text'
          placeholder='Question two'
          className='w-50 mx-auto text-center'
          aria-label='Question two'
          aria-describedby='Question two'
          onChange={(e) => setOptionTwo(e.target.value)}
          value={optionTwo}
        />
      </Form.Group>
      <Button
        type='submit'
        className='m-3'
        variant='success'
        disabled={optionOne === '' || optionTwo === ''}
      >
        Submit
      </Button>
    </Form>
  );
};
