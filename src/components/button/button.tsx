import React, { ForwardRefExoticComponent, RefAttributes } from 'react';
import clsx from 'clsx';
import { Button as MUIButton } from '@material-ui/core';
import { ButtonProps, ButtonVariant } from './types';
import { useStyles } from './styles';
import { Spinner } from '../../icons/fill';

const Button: ForwardRefExoticComponent<
  ButtonProps & RefAttributes<HTMLButtonElement>
> = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      type = 'button',
      variant = 'contained',
      color = 'primary',
      size = 'medium',
      classes = [],
      isLoading = false,
      disabled = false,
      startIcon = null,
      endIcon = null,
      ...props
    },
    ref
  ) => {
    const {
      outlinedPrimary,
      textPrimary,
      containedPrimary,
      outlinedGrey,
      textGrey,
      root,
      textColor,
      loading,
      bgColor,
      border,
      loader,
      hover,
      active,
      disable,
      loaderRotating,
    } = useStyles({
      size,
      color,
      variant,
      isLoading,
    });
    
    const uiButtonClasses = {
      outlinedPrimary: color === 'grey' ? outlinedGrey : outlinedPrimary,
      containedPrimary,
      textPrimary: color === 'grey' ? textGrey : textPrimary,
    };

    const userClasses = Array.isArray(classes) ? classes : [classes];

    let computedVariant: ButtonVariant = variant;
    if (color === 'grey' && variant === 'contained') {
      computedVariant = 'outlined';
    }

    return (
      <MUIButton
        ref={ref}
        variant={computedVariant}
        type={type}
        color="primary"
        size={size}
        disabled={disabled}
        className={clsx(
          root,
          textColor,
          bgColor,
          border,
          hover,
          active,
          disable,
          isLoading && loading,
          ...userClasses
        )}
        startIcon={!isLoading && startIcon}
        endIcon={!isLoading && endIcon}
        {...props}
        disableElevation
        disableRipple
        classes={uiButtonClasses}
      >
        {isLoading ? (
          <Spinner className={clsx(loader, loaderRotating)} />
        ) : (
          children
        )}
      </MUIButton>
    );
  }
);

export default Button;
