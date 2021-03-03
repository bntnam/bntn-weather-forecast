import { ThemeProvider } from 'styled-components';

import { theme } from '../styles';

export const MockTheme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;
