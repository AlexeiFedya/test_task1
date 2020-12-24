import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './styles/index.scss'

import App from './components/app/App';


ReactDOM.render(
  <Router basename="/test_task1">
    <App />
  </Router>,
  document.getElementById('root')
);

