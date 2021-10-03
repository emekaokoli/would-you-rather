import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Card } from 'react-bootstrap';
import { getAuthenticatedUser } from '../redux/authenticateUser.slice.reducer';
import { useHistory, useLocation } from 'react-router-dom';

export const Login = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { users } = useSelector((state) => state.users);
  const { authedUser, error } = useSelector((state) => state.auth);

  const [userID, setUserId] = useState('');
  const [errMess, setErrMess] = useState(null);

  const { state } = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();

    if ((authedUser === null && userID) === '') {
      setErrMess('You must choose a username');
    } else {
      dispatch(getAuthenticatedUser(userID)).then(() => {
        history.push(state?.from || '/');
      });
    }
  };

  if (error) {
    <div>{error}</div>;
  } else {
    return (
      <div className='d-flex justify-content-center pt-5 mt-5'>
        <Card style={{ width: '20rem', height: '15rem' }}>
          <Card.Body>
            <Card.Title className='mb-3'>Would you rather!</Card.Title>
            <Card.Subtitle className='mb-3'>Username</Card.Subtitle>
            <Form onSubmit={(e) => handleSubmit(e)}>
              {errMess ? <p className='text-danger'>{errMess}</p> : null}

              <Form.Select
                aria-label='Default select example'
                onChange={(e) => setUserId(e.target.value)}
              >
                <option>Select a user</option>
                {Object.keys(users).map((userID) => {
                  const userName = users[userID].name;

                  return (
                    <option key={userID} value={userID}>
                      {userName}
                    </option>
                  );
                })}
              </Form.Select>
              <Button
                style={{
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'center',
                }}
                type='submit'
                variant='outline-dark'
                className='mt-3'
                disabled={userID === ''}
              >
                Login
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
};
