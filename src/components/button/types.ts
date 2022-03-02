import { MouseEventHandler, ReactElement } from 'react';

export type ButtonType = 'button' | 'submit' | 'reset';
export type ButtonVariant = 'text' | 'outlined' | 'contained';
export type ButtonColor = 'grey' | 'primary';
export type ButtonSize = 'small' | 'medium' | 'large' ;

export type ButtonProps = {
  children: ReactElement | string | null;
  // styles
  type?: ButtonType;
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  classes?: string | string[];
  // controls
  disabled?: boolean;
  isLoading?: boolean;
  // icons
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick?: MouseEventHandler;
};
