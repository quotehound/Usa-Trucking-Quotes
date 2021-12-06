import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';
import Bugsnag from '@bugsnag/js'
import BugsnagPluginReact from '@bugsnag/plugin-react'


Bugsnag.start({
  apiKey: '03382ad0830133905e9644d5c27979c5',
  plugins: [new BugsnagPluginReact()]
})

const ErrorBoundary = Bugsnag.getPlugin('react')
  .createErrorBoundary(React)



ReactDOM.render(
  <Router>
      <ErrorBoundary>

    <App />
    </ErrorBoundary>

  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();