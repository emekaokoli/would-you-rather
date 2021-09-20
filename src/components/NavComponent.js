import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { useSelector } from 'react-redux';
import { LogOut } from './LogOut';
import { NavLink } from 'react-router-dom';

export const NavComponent = () => {
  const auth = useSelector((state) => state.auth);
  const { authedUser } = auth;
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
          Welcome <span className='text-capitalize'>{authedUser}</span>
        </Nav.Link>

        <div className='ml-3 p-2'>
          <LogOut />
        </div>
      </div>
    </Nav>
  );
};
