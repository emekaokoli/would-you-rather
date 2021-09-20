import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllData } from './redux/questions.slice.reducers';
import './App.css';
import { PrivateRoute } from './components/PrivateRoute';
import { Login } from './components/Login';

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.users);
  const { loading, error } = user;
  const { authedUser } = auth;

  useEffect(() => {
    dispatch(getAllData());
  }, [dispatch]);

  if (loading) {
    return <div>loadding...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  } else {
    return <>{authedUser === null ? <Login /> : <PrivateRoute />}</>;
  }
}

export default App;
