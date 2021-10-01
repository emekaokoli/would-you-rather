import React from 'react';
import { Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { NavComponent } from './NavComponent';
import { NewQuestion } from './NewQuestion';
import { LeaderBoard } from './LeaderBoard';
import { PageNotFound } from './NotFound';
import { Dashboard } from './Dashboard';
import { useSelector } from 'react-redux';
import { Login } from './Login';
import  Poll  from './Polls';

export const PrivateRoute = () => {
  const auth = useSelector((state) => state.auth);
  const { authedUser } = auth;
  return (
    <Router>
      <Container>
        {authedUser === null ? (
          <Redirect exact to='/' component={Login} />
        ) : (
          <Redirect exact to='/dashboard' component={Dashboard} />
        )}
        <main className='justify-content-center text-center'>
          <NavComponent />
          <Switch>
            <Route path='/question/:id' component={Poll} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/addquestion' component={NewQuestion} />
            <Route path='/leaderboard' component={LeaderBoard} />
            <Route path='*' component={PageNotFound} />
          </Switch>
        </main>
      </Container>
    </Router>
  );
};
