import { PaletteType } from "@material-ui/core"

export const getColors = () => {
  return {
    type: 'light' as PaletteType,

    text: {
      primary:   '#1F1F22',
      secondary: '#666666',
    },
    background:  '#FFFFFF',

    link: {
      main:    '#1663C2',
      hover:   '#0B4184',
      visited: '#6968A1',
    },

    gray: {
      dark:   '#BDBDBD', // gray4
      middle: '#E0E0E0', // gray5
      milk:   '#E9EAEC', // gray6
      light:  '#F2F4F7',
    },

    status: {
      info:      '#4787C2',
      warning:   '#FBBC06',
      error:     '#DD4340',
      success:   '#10B759',
      bgInfo:    '#E0EBF5',
      bgWarning: '#FEF5D7',
      bgError:   '#FFE1E2',
      bgSuccess: '#E0F5EB',
    },
  };
}