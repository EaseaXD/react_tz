import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';





let store ={
state: { 
  news: [
          {title: "Новость 1", info: "Описание 1"},
          {title: "Новость 2", info: "Описание 2"},
          {title: "Новость 3", info: "Описание 3"}
        ],
  validate: false ,
      }
      
};

ReactDOM.render(
 
  <React.StrictMode>
    <App state={store.state.news} />
  </React.StrictMode>
  
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
