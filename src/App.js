import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import React from 'react';
import { Box } from '@material-ui/core';
import Routes from './routes';
// import GlobalStyle from './styles/global';
import history from './services/history';
import Theme from './components/Theme';
import './assets/style/global.css'

function App() {
  return (
    <Theme>
      <Box maxWidth="375px" m="0 auto">
        <Router history={history}>
          <Routes />
          <ToastContainer autoClose={3000} />
        </Router>
      </Box>
    </Theme>
  );
}

export default App;
