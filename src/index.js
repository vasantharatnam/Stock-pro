import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ErrorProvider } from './apiHelper/ErrorContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ErrorProvider>
    <App />
    </ErrorProvider>
    </BrowserRouter>
  </React.StrictMode>
);

