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
        {authedUser === null ? (
          <Login />
        ) : (
          <main className='justify-content-center text-center'>
            <NavComponent />
            <Switch>
              <Route  path='/login' render={(props) => <Login {...props}/>} />
              <PrivateRoute exact path='/' component={Dashboard} />
              <PrivateRoute exact path='/add' component={NewQuestion} />
              <PrivateRoute exact path='/question/:id' component={Poll} />
              <PrivateRoute exact path='/leaderboard' component={LeaderBoard} />
              <Route
                exact
                path='*'
                render={(props) => <PageNotFound {...props} />}
              />
            </Switch>
          </main>
        )}
      </Container>
    </BrowserRouter>
  );
}

export default App;
