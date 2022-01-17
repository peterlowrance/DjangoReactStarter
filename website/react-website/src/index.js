import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('app')
);

window.getCSRFToken = () => document.cookie.split(';').find(c => c.startsWith('csrftoken')).substring('csrftoken'.length + 1);