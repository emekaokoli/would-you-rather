import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchQuestionsandUsers } from './redux/questions.slice.reducers';
import './App.css';
import { PrivateRoute } from './components/PrivateRoute';
import { Login } from './components/Login';

function App() {
  const dispatch = useDispatch();
  const  { authedUser }  = useSelector((state) => state.auth);
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
  } else if (error) {
    return <div>{error}</div>;
  } else {
    return <>{authedUser === null ? <Login /> : <PrivateRoute />}</>;
  }
}

export default App;
