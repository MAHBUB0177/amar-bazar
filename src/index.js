import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import Store from './Store'
import { PersistGate } from 'redux-persist/integration/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
     {/* <PersistGate loading={null} > */}
    <App />
     {/* </PersistGate> */}
  </Provider>
    
);


reportWebVitals();
