import { CSSProperties } from '@material-ui/styles'
import { PaletteOptions, Palette } from '@material-ui/core/styles/createPalette';
import { Typography, TypographyOptions } from '@material-ui/core/styles/createTypography';
import { Theme, ThemeOptions } from '@material-ui/core';
// import { CSSProperties } from 'react';

import {
  TextColorType,
  CommonColorMap,
  LinkColor,
  PartialColor,
  PrimaryColor,
  GreyColor,
} from './palette/types';


export type Fonts = {
  family: {
    regular: { [K in keyof CSSProperties]: CSSProperties[K] };
    bold: { [K in keyof CSSProperties]: CSSProperties[K] };
    caps: { [K in keyof CSSProperties]: CSSProperties[K] };
    light: { [K in keyof CSSProperties]: CSSProperties[K] };
    semibold: { [K in keyof CSSProperties]: CSSProperties[K] };
  };
  size: string[];
  lineHeight: string[];
};

// palette
export type NeededProps = 'type'
  | 'primary'
  | 'error'
  | 'warning'
  | 'info'
  | 'success'
  | 'grey'
  | 'text'
  | 'background'

export type DefaultThemePaletteOptionsProps = Pick<PaletteOptions, NeededProps> & { background: { opacity: string } }
export type DefaultThemePaletteProps = Pick<Palette, NeededProps> & { background: { opacity: string } }


export interface UiPaletteOptions
  extends Omit<DefaultThemePaletteOptionsProps, 'primary' | 'grey' | 'text' | 'error' | 'warning' | 'info' | 'success'> {
  primary?: PrimaryColor;
  grey?: PartialColor;
  text?: TextColorType;
  gradient?: string[];
  error?: CommonColorMap;
  warning?: CommonColorMap;
  info?: CommonColorMap;
  success?: CommonColorMap;
  link?: LinkColor;
}
export interface UiPalette
  extends Omit<DefaultThemePaletteProps, 'primary' | 'grey' | 'text' | 'error' | 'warning' | 'info' | 'success'> {
  primary: PrimaryColor;
  grey: GreyColor;
  text: TextColorType;
  error: CommonColorMap;
  warning: CommonColorMap;
  info: CommonColorMap;
  success: CommonColorMap;
  link: LinkColor;
}

// typography
type UiTypoVariants =
  | 'body1semibold'
  | 'subtitle1semibold'
  | 'buttonM'
  | 'buttonS'
  | 'buttonL'
  | 'h1semibold'


type UiFontProperties = Pick<
  CSSProperties,
  'fontFamily' | 'fontWeight' | 'fontSize' | 'lineHeight' | 'color'
>;
type TypoProps = Record<UiTypoVariants, UiFontProperties>;
type TypoPropsOptional = Partial<Record<UiTypoVariants, UiFontProperties>>;


export interface UiTypography
  extends Typography,
  TypoProps { }

export interface UiTypographyOptions
  extends TypographyOptions,
  TypoPropsOptional { }


// theme
export interface UiThemeOptions extends ThemeOptions {
  uiPalette?: UiPaletteOptions;
  typography?: UiTypographyOptions;
}

export interface UiTheme extends Theme {
  uiPalette: UiPalette;
  typography: UiTypography;
}

export type { UiFontProperties };

