import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
// import { Provider } from 'react-redux';

import AppProvider from './hooks';

import { GlobalStyle } from './style/global';

import { store } from './store';

import Routes from './routes';

import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppProvider>
        <GlobalStyle />
        <Router>
          <Navbar />
          <Routes />
        </Router>
      </AppProvider>
    </Provider>
  );
};

export default App;
