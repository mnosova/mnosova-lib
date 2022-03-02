import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { UiTheme } from '../theme';

type ThemeProviderProps = {
  children: React.ReactNode;
  theme: UiTheme;
};

export default ({ children, theme }: ThemeProviderProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
