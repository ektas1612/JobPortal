import React from 'react';
import './App.css';
import { MantineProvider, Text } from '@mantine/core';
import '@mantine/core/styles.css';
import HomePage from './Pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  const theme = {
    colors: {
      'curious-blue': ['#f3f7fc', '#e5eff9', '#c6ddf1', '#94c1e5', '#589fd5', '#3584c2', '#2569a4', '#1f5485', '#1e486e', '#1e3d5c', '#14283d'] as const
    }
  };

  return (
    <MantineProvider theme={theme}>
      <BrowserRouter>
      <Routes>
        <Route path='*' element={<HomePage />} />
      </Routes>
        <HomePage />
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
