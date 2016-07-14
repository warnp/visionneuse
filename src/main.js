// Polyfill
import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import './styles/style.css';

window.React = React;

render(
  <div>
    <App />
  </div>,
  document.getElementById('app')
);
