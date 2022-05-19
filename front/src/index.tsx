import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
if ( container ) {
  const root = createRoot(container);
  root.render(<BrowserRouter><App /></BrowserRouter>);
}

reportWebVitals();
