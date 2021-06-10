import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { ContextWrapper } from './context/ContextWrapper';

ReactDOM.render(
  <React.StrictMode>
    <ContextWrapper>
      <App />
    </ContextWrapper>
  </React.StrictMode>,
  document.getElementById('root')
);
