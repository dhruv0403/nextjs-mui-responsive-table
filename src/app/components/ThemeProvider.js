// src/app/ThemeProvider.js
"use client"; // This marks the file as a client component

import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const CustomThemeProvider = ({ children }) => {
  const theme = createTheme({
    palette: {
      mode: 'dark', // or 'light' for light theme
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;
