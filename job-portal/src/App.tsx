import React from 'react';
import './App.css';
import { MantineProvider, Text } from '@mantine/core';
import '@mantine/core/styles.css';
import { Slider } from '@mantine/core';
function App() {
  return (
    <MantineProvider>
      <Text>Welcome to Mantine!</Text>
      <Slider
      color="red"
      marks={[
        { value: 20, label: '20%' },
        { value: 50, label: '50%' },
        { value: 80, label: '80%' },
      ]}
    />
    </MantineProvider>
  );
}

export default App;
