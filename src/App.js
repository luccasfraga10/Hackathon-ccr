import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import React from 'react';
import Routes from './routes';
import GlobalStyle from './styles/global';
import history from './services/history';
import Theme from './components/Theme';

function App() {
  return (
    <Theme>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </Router>
    </Theme>
  );
}

export default App;
