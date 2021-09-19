import React, { useEffect } from 'react';
import {useDispatch} from 'react-redux'
import {getAllQuestions} from './redux/questions.slice.reducers'
import './App.css';


function App() {
const dispatch = useDispatch()


  useEffect(() => {
   dispatch(getAllQuestions());
  }, [dispatch])



  return (
    <div className="App">
      <header className="App-header">
       app screen
      </header>
    </div>
  );
}

export default App;
