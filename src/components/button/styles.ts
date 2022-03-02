import { makeStyles } from '@material-ui/core';
import { ButtonColor, ButtonSize, ButtonVariant } from './types';
import { UiTheme } from '../../theme'
import { UiFontProperties } from '../../theme/types';

type ButtonStylesProps = {
  size: ButtonSize,
  variant: ButtonVariant;
  color: ButtonColor;
  isLoading: boolean;
};

export const useStyles = makeStyles<UiTheme, ButtonStylesProps>((theme) => ({
  outlinedPrimary: {  color: theme.uiPalette.primary[500], border: `1px solid ${theme.uiPalette.primary[500]}`, backgroundColor: 'transparent', '& svg': { fill: 'currentColor' } },
  textPrimary: {  backgroundColor: 'transparent', color: theme.uiPalette.primary[500], '& svg': { fill: 'currentColor' } },
  containedPrimary: { fill: theme.uiPalette.text.contrastText, backgroundColor: theme.uiPalette.primary[500], color: theme.uiPalette.text.contrastText, '& svg': { fill: 'currentColor' } },
  outlinedGrey: {  border: `1px solid ${theme.uiPalette.grey[400]}`, color: theme.uiPalette.text.secondary, backgroundColor: 'transparent', '& svg': { fill: 'currentColor' } },
  textGrey: {  backgroundColor: 'transparent', color: theme.uiPalette.text.secondary, '& svg': { fill: 'currentColor' } },
  '@keyframes rotate': {
    '0%': {
      transform: 'rotateZ(0deg)',
    },
    '100%': {
      transform: 'rotateZ(360deg)',
    }
  },
  loaderRotating: {
    animation: `$rotate 1s linear infinite`,
    '& path': {
      transformOrigin: 'center'
    }
  },
  root: ({ size, variant }) => {
    let typography: UiFontProperties;
    let padding: string;
    let minWidth: number;
    switch (size) {
      case 'large': {
        const { color, ...restTypographyL } = theme.typography.buttonL
        typography = restTypographyL;
        padding = variant === 'outlined' ? '7px 21px' : '8px 22px';
        minWidth = 42;
        break;
      }
      case 'small': {
        const { color, ...restTypographyS } = theme.typography.buttonS
        typography = restTypographyS
        padding = variant === 'outlined' ? '4px 10px' : '5px 11px';
        minWidth = 30;
        break;
      }
      case 'medium':
      default: {
        const { color, ...restTypographyM } = theme.typography.buttonM
        typography = restTypographyM;
        padding = variant === 'outlined' ? '5px 15px' : '6px 16px';
        minWidth = 36
        break;
      }
    }

    return {
      ...typography,
      padding,
      minWidth,
      borderRadius: 4,
      textTransform: 'initial',
      boxSizing: 'border-box',
      transitionProperty: 'color, background-color, border-color',
      '& svg': {
        fill: 'currentColor'
      }
    }
  },
  textColor: ({ variant, color }) => {
    let textColor: string;
    if (color === 'grey') {
      textColor = theme.uiPalette.text.secondary;
    } else {
      textColor = theme.uiPalette.primary['500'];
    }

    return {
      color: variant === 'contained' ? theme.uiPalette.background.paper : textColor
    }
  },
  bgColor: ({ variant }) => ({
    backgroundColor: variant === 'contained' ? theme.uiPalette.primary[500] : 'transparent',
  }),
  // containedBgColor:{backgroundColor:theme.uiPalette.primary[500]},
  // otherBgColor:{backgroundColor:'transparent'},

  border: ({ variant, color }) => ({
    border: variant === 'outlined'
      ? `1px solid ${color === 'grey'
        ? theme.uiPalette.text.secondary
        : theme.uiPalette.primary[500]}`
      : 'none'
  }),
  loader: ({ variant, size, color }) => {
    let scale: number = 1;
    if (size === 'small') scale = 0.8;
    else if (size === 'large') scale = 1.2;

    let textColor = variant === 'contained' ? theme.uiPalette.background.paper : theme.uiPalette.primary[500];
    if (color === 'grey') {
      textColor = variant === 'outlined' ? theme.uiPalette.background.paper : theme.uiPalette.text.secondary;
    }

    return {
      fill: textColor,
      color: textColor,
      '& path': {
        transform: `scale(${scale})`
      }
    }
  },
  loading: ({ variant, size, color }) => {
    const { '500': bg500, '200': bg200 } = theme.uiPalette.primary;
    let backgroundColor: string;
    switch (variant) {
      case 'text':
        backgroundColor = color === 'grey' ? theme.uiPalette.grey[200] : bg200;
        break;
      case 'outlined':
        backgroundColor = color === 'grey' ? theme.uiPalette.text.secondary : 'transparent';
        break;
      case 'contained':
      default:
        backgroundColor = bg500;
    }
    return {
      cursor: 'progress',
      backgroundColor,
      height: size === 'small' ? 30 : 'auto'
    };
  },
  hover: ({ isLoading, variant, color }) => {
    let bg: string = isLoading ? theme.uiPalette.primary[500] : theme.uiPalette.primary[600];;
    let border: string = 'none';
    let colorText: string = theme.uiPalette.background.paper;

    if (variant === 'text') {
      if (color === 'grey') {
        bg = isLoading ? theme.uiPalette.grey[200] : theme.uiPalette.grey[100];
        colorText = theme.uiPalette.text.secondary;
      } else {
        bg = isLoading ? theme.uiPalette.primary[200] : theme.uiPalette.primary[100];
        colorText = theme.uiPalette.primary['600'];
      }
    } else if (variant === 'outlined') {
      if (color === 'grey') {
        bg = isLoading ? theme.uiPalette.text.secondary : theme.uiPalette.grey[400];
        border = `1px solid ${bg}`;
      } else {
        bg = isLoading ? 'transparent' : theme.uiPalette.primary[500];
        border = `1px solid ${theme.uiPalette.primary[500]}`;
      }
    }

    return {
      '&:hover': {
        color: colorText,
        border,
        backgroundColor: bg
      }
    };
  },
  active: ({ isLoading, variant, color }) => {
    if (isLoading) return {};

    let bg: string = theme.uiPalette.primary['700'];
    let border: string = 'none';
    let colorText: string = theme.uiPalette.background.paper;

    if (variant === 'text') {
      if (color === 'grey') {
        bg = theme.uiPalette.grey['200'];
        colorText = theme.uiPalette.text.secondary;
      } else {
        bg = theme.uiPalette.primary['200'];
        colorText = theme.uiPalette.primary['600'];
      }
    } else if (variant === 'outlined') {
      if (color === 'grey') {
        bg = theme.uiPalette.text.secondary;
      } else {
        bg = theme.uiPalette.primary['600'];
      }
      border = `1px solid ${bg}`;
    }

    return {
      '&:active': {
        color: colorText,
        border,
        backgroundColor: bg
      }
    };
  },
  disable: ({ variant }) => ({
    '&:disabled': {
      color: variant === 'contained' ? theme.uiPalette.background.paper : theme.uiPalette.text.disabled,
      backgroundColor: variant === 'contained' ? theme.uiPalette.grey['300'] : 'transparent',
      borderColor: variant === 'outlined' ? theme.uiPalette.grey[200] : 'none'
    }
  })
}));
