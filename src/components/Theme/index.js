import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import defaultTheme from './defaultTheme';

const Theme = ({ children }) => (
  <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
);

export default Theme;
