import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const postsData = [
  { id: 1, message: 'hi, whats up', likes: 15 },
  { id: 2, message: 'second post', likes: 12 },
];

const dialogsData = [
  { id: 1, name: 'Tom' },
  { id: 2, name: 'Justin' },
  { id: 3, name: 'Anton' },
  { id: 4, name: 'Miha' },
  { id: 5, name: 'Rocky' },
  { id: 6, name: 'Harry' },
];

const messagesData = [
  { id: 1, message: 'hi' },
  { id: 2, message: 'how are you' },
  { id: 3, message: 'yo' },
  { id: 4, message: 'yo' },
  { id: 5, message: 'yo' },
  { id: 6, message: 'yo' },
];

ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData} />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
