import { PaletteType } from '@material-ui/core';
import createUiTheme from './createUiTheme';

import { BaseColor } from './palette/types';
import { UiTheme } from './types'

const baseColors = {
  light: [
    { h: 239, s: 40, l: 56 },
    { h: 212, s: 50, l: 45 },
    { h: 186, s: 79, l: 31 },
  ] as BaseColor[],
  dark: [
    { h: 256, s: 65, l: 72 },
    { h: 212, s: 90, l: 65 },
    { h: 167, s: 47, l: 52 },
  ] as BaseColor[],
};

type AppThemes = Record<PaletteType, UiTheme[]>

const paletteTypes: PaletteType[] = ['light', 'dark'];

export const uiThemeMap: AppThemes = paletteTypes.reduce((acc, type) => {
  const palettesIncArr = [0, 1, 2]
  return {
    ...acc,
    [type]: palettesIncArr.map((num) =>
      createUiTheme({ type, baseColor: baseColors[type][num] })
    ),
  };
}, {} as AppThemes);


export type { UiTheme, UiThemeOptions } from './types';


