import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './redux/configure.store';
//import { fetchQuestionsandUsers } from './redux/questions.slice.reducers';

//import { getAllInitialsUsers } from './redux/users.slice.reducers';

//store.dispatch(getAllInitialsUsers())



// store.dispatch(fetchQuestionsandUsers);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    ,
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
