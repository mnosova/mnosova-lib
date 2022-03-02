import createTypography from '@material-ui/core/styles/createTypography';

import SBSansUiRegular from './SBSansUI-Regular.woff';
import SBSansUiBold from './SBSansUI-Bold.woff';
import SBSansUiCaps from './SBSansUI-Caps.woff';
import SBSansUiLight from './SBSansUI-Light.woff';
import SBSansUiSemibold from './SBSansUI-Semibold.woff';

import { Fonts, UiFontProperties, UiPalette, UiTypography } from '../types';

export const fonts: Fonts = {
  family: {
    regular: {
      fontFamily: 'SBSansUI-Regular',
      fontStyle: 'normal',
      fontDisplay: 'swap',
      fontWeight: 400,
      src: `url(${SBSansUiRegular})`,
    },
    bold: {
      fontFamily: 'SBSansUI-Bold',
      fontStyle: 'normal',
      fontDisplay: 'swap',
      fontWeight: 600,
      src: `url(${SBSansUiBold})`,
    },
    caps: {
      fontFamily: 'SBSansUI-Caps',
      fontStyle: 'normal',
      fontDisplay: 'swap',
      fontWeight: 400,
      src: `url(${SBSansUiCaps})`,
    },
    light: {
      fontFamily: 'SBSansUI-Light',
      fontStyle: 'normal',
      fontDisplay: 'swap',
      fontWeight: 300,
      src: `url(${SBSansUiLight})`,
    },
    semibold: {
      fontFamily: 'SBSansUI-Semibold',
      fontStyle: 'normal',
      fontDisplay: 'swap',
      fontWeight: 500,
      src: `url(${SBSansUiSemibold})`,
    },
  },
  size: ['10px', '12px', '13px', '14px', '16px', '18px', '21px', '24px'],
  lineHeight: ['14px', '16px', '18px', '20px', '22px', '24px', '26px', '28px'],
};

export const getTypography = (palette: UiPalette): UiTypography => {
  // @ts-ignore
  const defaultTypography = createTypography(palette, {});

  const headlineStyle: UiFontProperties = {
    fontFamily: 'SBSansUI-Regular',
    fontWeight: 'normal',
    fontSize: fonts.size[7],
    lineHeight: fonts.lineHeight[7],
    color: palette.text.primary,
  };

  const bodyStyle: UiFontProperties = {
    fontFamily: 'SBSansUI-Regular',
    fontWeight: 'normal',
    fontSize: fonts.size[4],
    lineHeight: fonts.lineHeight[4],
    color: palette.text.primary,
  };

  return {
    ...defaultTypography,
    fontSize: parseInt(fonts.size[4], 10),
    fontFamily: 'SBSansUI, Arial',
    h1: {
      ...headlineStyle,
    },
    h1semibold: { ...headlineStyle, fontFamily: 'SBSansUI-Semibold' },

    body1: {
      ...bodyStyle,
    },
    body1semibold: {
      ...bodyStyle,
      fontSize: fonts.size[4],
      lineHeight: fonts.lineHeight[4],
      fontFamily: 'SBSansUI-Semibold',
    },
    subtitle1: {
      ...bodyStyle,
      fontSize: fonts.size[2],
      lineHeight: fonts.lineHeight[2],
    },
    subtitle1semibold: {
      ...bodyStyle,
      fontSize: fonts.size[2],
      lineHeight: fonts.lineHeight[2],
      fontFamily: 'SBSansUI-Semibold',
    },
    buttonL: {
      ...bodyStyle,
      fontSize: fonts.size[4],
      lineHeight: fonts.lineHeight[6],
      fontFamily: 'SBSansUI-Semibold',
    },
    buttonM: {
      ...bodyStyle,
      fontSize: fonts.size[3],
      lineHeight: fonts.lineHeight[5],
      fontFamily: 'SBSansUI-Semibold',
    },
    buttonS: {
      ...bodyStyle,
      fontSize: fonts.size[2],
      lineHeight: fonts.lineHeight[3],
      fontFamily: 'SBSansUI-Semibold',
    },
    caption: {
      fontSize: fonts.size[1],
      lineHeight: fonts.lineHeight[1],
    },
    overline: {
      fontSize: fonts.lineHeight[0],
      lineHeight: fonts.lineHeight[0],
    },
    button: {
      fontWeight: 500,
      fontSize: fonts.size[4],
      lineHeight: fonts.lineHeight[1],
    },
  };
};
