import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Weather } from './components';
import { AppStateProvider } from './context/app';
import { GlobalStyle, LoadingScreen, theme } from './shared';

const App = () => (
  <AppStateProvider>
    <ThemeProvider theme={theme}>
      <LoadingScreen />
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact component={Weather} />
        </Switch>
      </Router>
    </ThemeProvider>
  </AppStateProvider>
);

export default App;
