import React from 'react';

import { GlobalStyle, theme } from 'shared';
import { ThemeProvider } from 'styled-components';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <div className="App">Hello World!</div>
  </ThemeProvider>
);

export default App;
