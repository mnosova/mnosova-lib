import React from 'react';
import { CssBaseline } from '@material-ui/core';
import ThemeProvider from '../src/hoc/StorybookTheme';
import { uiThemeMap } from '../src/theme';
import { StoryContext } from '@storybook/react';

const LIGHT_THEME = 'Светлая тема';
const DARK_THEME = 'Темная тема';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    values: [],
  },
};

export const globalTypes = {
  theme: {
    name: 'Тема',
    description: 'Глобальная тема',
    defaultValue: LIGHT_THEME,
    toolbar: {
      icon: 'globe',
      items: [LIGHT_THEME, DARK_THEME],
    },
  },
  themeColor: {
    name: 'Цвет темы',
    description: 'Глобальный цвет темы',
    defaultValue: '0',
    toolbar: {
      icon: 'circlehollow',
      items: ['0', '1', '2'],
    },
  },
};

const withThemeProvider = (Story: React.FC, context: StoryContext) => {
  const isDark = context.globals.theme === DARK_THEME;
  const themeColor = context.globals.themeColor || 0;
  const darkTheme = uiThemeMap.dark[themeColor];
  const lightTheme = uiThemeMap.light[themeColor];

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  );
};

export const decorators = [withThemeProvider];
