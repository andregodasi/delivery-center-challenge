import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import AppProvider from './hooks';

import GlobaStyle from './styles/global';

import Routes from './routes';

import Header from './components/Header';

const App: React.FC = () => {
  return (
    <Router>
      <AppProvider>
        <Header />
        <Routes />
      </AppProvider>
      <GlobaStyle />
    </Router>
  );
};

export default App;
