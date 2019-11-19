import React from 'react';
import { ThemeProvider } from 'styled-components'
import BoltTheme from '@boltui/bolt'

import NameForm from './examples/FormikBolt'
import './App.css';

function App() {
  return (
    <ThemeProvider theme={BoltTheme}>
      <NameForm initialValues={{ firstName: ''}} />
    </ThemeProvider>
  );
}

export default App;
