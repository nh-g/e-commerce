import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import {StateProvider} from './state/StateProvider';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

