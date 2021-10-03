import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuestionsandUsers } from './redux/questions.slice.reducers';
import { Container } from 'react-bootstrap';
import './App.css';
import { PrivateRoute } from './components/PrivateRoute';
import { Login } from './components/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { NavComponent } from './components/NavComponent';
import { Dashboard } from './components/Dashboard';
import { NewQuestion } from './components/NewQuestion';
import Poll from './components/Polls';
import { LeaderBoard } from './components/LeaderBoard';
import { PageNotFound } from './components/NotFound';

function App() {
  const dispatch = useDispatch();
  const { authedUser } = useSelector((state) => state.auth);
  const { loading, error } = useSelector((state) => state.questions);

  useEffect(() => {
    dispatch(fetchQuestionsandUsers());
  }, [dispatch]);

  if (loading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          justifyItems: 'center',
          alignItems: 'center',
        }}
      >
        loadding...
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <BrowserRouter>
      <Container>
        <Route
          path='/'
          render={() => (authedUser !== null ? <NavComponent /> : null)}
        />
        <main className='justify-content-center text-center'>
          <Switch>
            <Route
              exact
              path='/login'
              render={(props) => <Login {...props} />}
            />
            <PrivateRoute exact path='/'>
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute exact path='/add'>
              <NewQuestion />
            </PrivateRoute>
            <PrivateRoute exact path='/question/:id'>
              <Route render={(props) => <Poll {...props} />} />
            </PrivateRoute>
            <PrivateRoute exact path='/leaderboard'>
              <LeaderBoard />
            </PrivateRoute>
            <Route path='*'>
              <PageNotFound />
            </Route>
          </Switch>
        </main>
      </Container>
    </BrowserRouter>
  );
}

export default App;
