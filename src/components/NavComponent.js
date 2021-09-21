import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { useSelector } from 'react-redux';
import { LogOut } from './LogOut';
import { NavLink } from 'react-router-dom';
import { Figure } from 'react-bootstrap';

export const NavComponent = () => {
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.users);

  const { authedUser } = auth;
  const { users } = user;
  const userphoto = users[authedUser].avatarURL;

  return (
    <Nav
      variant='tabs'
      defaultActiveKey='/dashboard'
      className='justify-content-center'
    >
      <Nav.Item>
        <Nav.Link
          eventKey='dashboard'
          as={NavLink}
          to='/dashboard'
          activeStyle={{
            fontWeight: 'bold',
            color: 'blue',
          }}
        >
          Dashboard
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey='newquestion'
          as={NavLink}
          to='/addquestion'
          activeStyle={{
            fontWeight: 'bold',
            color: 'blue',
          }}
        >
          Add new Question
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          eventKey='leaderboard'
          as={NavLink}
          to='/leaderboard'
          activeStyle={{
            fontWeight: 'bold',
            color: 'blue',
          }}
        >
          LeaderBoard
        </Nav.Link>
      </Nav.Item>
      <div className='d-flex justify-content-end'>
        <Nav.Link eventKey='welcome' disabled aria-disabled='true'>
          <span className='text-capitalize'>
            <Figure>
              <Figure.Image
                width={30}
                height={30}
                alt={userphoto}
                src={userphoto}
                style={{ borderRadius: '50' }}
                className='rounded-circle p-1'
              />
            </Figure>
            {authedUser}
          </span>
        </Nav.Link>

        <div className='ml-3 p-2'>
          <LogOut />
        </div>
      </div>
    </Nav>
  );
};
