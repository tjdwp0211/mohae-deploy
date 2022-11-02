/** @format */

import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/root';
import { Provider } from 'react-redux';
import { loginCheck } from './utils/loginCheck';

import * as ReactDOMClient from 'react-dom/client';

loginCheck();

const root = ReactDOMClient.createRoot(document.getElementById('root')); // createRoot(container!) if you use TypeScript
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
reportWebVitals();

const reponse = 1;

// react 18 -v 세팅

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );
// reportWebVitals();

// react 17.x -v 세팅
