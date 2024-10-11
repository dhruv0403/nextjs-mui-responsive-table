// src/app/page.js
"use client"; // Mark this file as a client component

import React from 'react';
import CustomThemeProvider from './components/ThemeProvider';
import DataTable from './components/DataTable'; // Adjust the import path as necessary

const App = () => {
  return (
      <DataTable />
  );
};

export default App;
