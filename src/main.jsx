import React from 'react'; // Add this import statement
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import {store} from './assets/store'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={store}>
   <App />
   <Toaster/>
  </Provider>
  </StrictMode>
);
