import { PaletteType } from '@material-ui/core';
// import { Color } from '@material-ui/core/styles/createPalette';

import { toHsl, hslToHex, hexTransparency } from '../utils';
import {
  BaseColor,
  StatusMap,
  ThemesFormulasByShades,
  TextColorType,
  CommonColorMap,
  LinkColor,
  PrimaryColor,
  GreyColor,
} from './types';

/**
 * основные цвета
 */
export const getPrimaryColorsByBaseColor = (
  type: PaletteType,
  baseColor: BaseColor
): PrimaryColor => {
  const { h, s, l } = baseColor;

  const hslByThemeShade: ThemesFormulasByShades = {
    light: {
      100: [h, s, 94],
      200: [h, s, 90],
      500: [h, s, l],
      600: [h, s, l - 5],
      700: [h, s, l - 10],
    },
    dark: {
      100: [h, s, 15],
      200: [h, s, 10],
      500: [h, s, l],
      600: [h, s + 5, l + 5],
      700: [h, s + 10, l + 10],
    },
  };

  const gradientMap = {
    light: {
      deg: '135deg',
      first: [h, s, l],
      second: [h - 15, s - 7, l + 7],
    },
    dark: {
      deg: '96.11deg',
      first: [h, s, l],
      second: [h + 15, s + 7, l - 7],
    },
  };

  const currentGradient = gradientMap[type];
  const firstGradientColor = hslToHex(toHsl(...currentGradient.first));
  const secondGradientColor = hslToHex(toHsl(...currentGradient.second));
  const gradient = `linear-gradient(${currentGradient.deg}, ${firstGradientColor} 0%,  ${secondGradientColor} 100%)`;

  const shades = Object.keys(hslByThemeShade.light);
  const hslByType = hslByThemeShade[type];

  const mappedShades = shades.reduce(
    (acc, shade) => ({ ...acc, [shade]: hslToHex(toHsl(...hslByType[shade])) }),
    {} as PrimaryColor
  );

  return {
    ...mappedShades,
    gradient,
    secondGradientColor
  };
};

/** 
 * статусные цвета
 */
export const getStatusColors = (
  type: PaletteType,
  status: string
): CommonColorMap => {
  const statusColorsDictionary = {
    light: {
      warning: {
        main: '#FBBC06',
        secondary: '#FEF5D7',
      },
      success: {
        main: '#10B759',
        secondary: '#E0F5EB',
      },
      error: {
        main: '#DD4340',
        secondary: '#FFE1E2',
      },
      info: {
        main: '#4787C2',
        secondary: '#E0EBF5',
      },
    } as StatusMap,
    dark: {
      warning: {
        main: '#EB9834',
        secondary: '#995E17',
      },
      success: {
        main: '#13C181',
        secondary: '#106B3B',
      },
      error: {
        main: '#F46352',
        secondary: '#853129',
      },
      info: {
        main: '#6A9CD9',
        secondary: '#213D63',
      },
    } as StatusMap,
  };

  return statusColorsDictionary[type][status];
};

/**
 * оттенки серого
 */
export const getGreyShades = (type: PaletteType): GreyColor => {
  const greyShadesDictionary = {
    light: {
      500: '#9E9E9E',
      400: '#C0C0C0',
      300: '#E0E0E0',
      200: '#E9EAEC',
      100: '#F6F8FA',
      50: '#FBFBFB',
    } as GreyColor,
    dark: {
      500: '#A3A3A3',
      400: '#5C5C5C',
      300: '#464848',
      200: '#3B3D3E',
      100: '#303233',
      50: '#2D2F2F',
    } as GreyColor,
  };

  return greyShadesDictionary[type];
};

/**
 * текстовые цвета
 */
export const getTextColors = (type: PaletteType): TextColorType => {
  const textColorsDictionary = {
    light: {
      primary: '#1F1F22',
      secondary: '#666666',
      contrastText: '#FDFDFD',
      disabled: '#A3A3A3',
    },
    dark: {
      primary: '#FDFDFD',
      secondary: '#C7C7C7',
      contrastText: '#1F1F22',
      disabled: '#666666',
    },
  };

  return textColorsDictionary[type];
};

/**
 * фоновые цвета
 */
export const getBackgroundColors = (type: PaletteType) => {
  const backgroundColorsDictionary = {
    light: {
      paper: '#FFF',
      default: '#F7F9FA',
      opacity: `#000000${hexTransparency(75)}`
    },
    dark: {
      paper: '#282828',
      default: '#202020',
      opacity: `#FFFFFF${hexTransparency(85)}`
    },
  };

  return backgroundColorsDictionary[type];
};

/**
 * цвета ссылок
 */
export const getLinkColors = (type: PaletteType): LinkColor => {
  const linkColorsDictionary = {
    light: {
      enabled: '#1663C2',
      hover: '#0B4184',
      visited: '#6968A1',
    },
    dark: {
      enabled: '#32D8EB',
      hover: '#87F1F5',
      visited: '#A7A7D1',
    },
  };

  return linkColorsDictionary[type];
};


