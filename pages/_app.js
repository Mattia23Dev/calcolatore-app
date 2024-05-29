import React from 'react';
import './index.css';
import './App.css'
import './calcolatore.css'
import { AppProvider } from '../context/AppContext';

function MyApp({ Component, pageProps }) {
    return (
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    );
  }

export default MyApp;

