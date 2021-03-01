import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Weather } from './components';
import { GlobalStyle, theme } from './shared';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Router>
      <Switch>
        <Route exact component={Weather} />
      </Switch>
    </Router>
  </ThemeProvider>
);

export default App;
