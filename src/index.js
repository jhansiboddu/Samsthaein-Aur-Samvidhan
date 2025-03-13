import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom'; // Correct import
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router> {/* Changed to HashRouter */}
    <App />
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
