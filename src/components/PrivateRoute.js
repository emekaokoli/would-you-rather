import React from 'react';
import { Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { NavComponent } from './NavComponent';
import { QuestionDetail } from './QuestionDetail';
import { NewQuestion } from './NewQuestion';
import { Leaderboard } from './Leaderboard';
import { PageNotFound } from './NotFound';
import { Dashboard } from './Dashboard';
import { useSelector } from 'react-redux';
import { Login } from './Login';

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
            <Route path='/question/:id' component={QuestionDetail} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/addquestion' component={NewQuestion} />
            <Route path='/leaderboard' component={Leaderboard} />
            <Route path='*' component={PageNotFound} />
          </Switch>
        </main>
      </Container>
    </Router>
  );
};
