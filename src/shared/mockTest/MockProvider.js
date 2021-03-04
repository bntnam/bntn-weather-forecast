import { ThemeProvider } from 'styled-components';

import { AppStateProvider } from '../../context/app';
import { theme } from '../styles';

export const MockProvider = ({ children }) => (
  <AppStateProvider>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </AppStateProvider>
);
