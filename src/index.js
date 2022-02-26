import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './fonts/Gilroy-Black.ttf';
import './fonts/Gilroy-Regular.ttf';
import './fonts/Gilroy-Medium.ttf';
import './fonts/Gilroy-Light.ttf';
import './fonts/Gilroy-Bold.ttf';
import './fonts/Gilroy-Semi.ttf';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
