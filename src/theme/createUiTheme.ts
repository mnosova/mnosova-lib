import {
  createMuiTheme,
  PaletteType,
  ThemeOptions,
} from '@material-ui/core';
import { UiTheme } from './types';

import { BaseColor } from './palette/types';
import { getPalette } from './palette';
import { getTypography, fonts } from './fonts';

type CreateUiThemeOptions = { type: PaletteType; baseColor: BaseColor };

const createUiTheme = (palette: CreateUiThemeOptions): UiTheme => {
  const {
    type,
    baseColor
  } = palette;
  const uiPalette = getPalette(type, baseColor);
  const uiTypo = getTypography(uiPalette);

  const defaultThemeOptions: ThemeOptions = {
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '@font-face': [
            fonts.family.regular,
            fonts.family.bold,
            fonts.family.light,
            fonts.family.semibold,
          ],
          body: {
            backgroundColor: uiPalette.background.default,
          },
        },
      },
    },
  };

  const getMuiTheme = ( options: any) => {
    return createMuiTheme({
      ...options,
    });
  };

  const Theme = getMuiTheme( defaultThemeOptions);
  return {
    ...Theme,
    uiPalette,
    typography: uiTypo,
  };
};

export default createUiTheme