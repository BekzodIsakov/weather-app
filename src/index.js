import React from 'react';
import ReactDOM from 'react-dom';
import { IconContext } from 'react-icons';

import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <IconContext.Provider value={{ color: '#4c668a', size: 28 }}>
      <App />
    </IconContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
