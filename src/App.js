import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {getAllQuestions} from './redux/questions.slices.reducers'
import {getAllUsers} from './redux/users.slice.reducers'
import './App.css';


function App() {
const dispatch = useDispatch()


  useEffect(() => {
   dispatch(getAllUsers())
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
