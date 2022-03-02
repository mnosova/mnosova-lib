import { PaletteType } from '@material-ui/core';
import { UiPalette } from '../types';

import {
  getStatusColors,
  getGreyShades,
  getTextColors,
  getBackgroundColors,
  getLinkColors, getPrimaryColorsByBaseColor,
} from './palettePartGetters';
import {BaseColor} from "./types";

export const getPalette = (
  type: PaletteType,
  paletteBaseColor: BaseColor
): UiPalette => {
  return {
    type,
    primary: getPrimaryColorsByBaseColor(type, paletteBaseColor),
    background: getBackgroundColors(type),
    text: getTextColors(type),
    grey: getGreyShades(type),
    warning: getStatusColors(type, 'warning'),
    error: getStatusColors(type, 'error'),
    info: getStatusColors(type, 'info'),
    success: getStatusColors(type, 'success'),
    link: getLinkColors(type),
  }
};
