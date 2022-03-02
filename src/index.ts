/// <reference path="./global.d.ts" />
import React from 'react';
import * as fillIcons from './icons/fill';

export { Button } from './components/button';
export { uiThemeMap } from './theme';
export { default as createUiTheme } from './theme/createUiTheme';

export type { UiTheme, UiThemeOptions } from './theme';


export const icons = {
  fill: fillIcons,
};

type IconsType ='fill';
type GetAllKeys<T extends IconsType> = keyof typeof icons[T];
type FillIcons = `fill.${GetAllKeys<'fill'>}`;
export type AllIconsPath = FillIcons;

export type IconProps = React.SVGProps<SVGSVGElement> & { color: string };

const isNumeric = (num: number) => !isNaN(num);

const innerGetIcons = (
  pathContext: string,
  iconsContext: React.FC<IconProps> | any
): React.FC | null => {
  const [first, ...rest] = pathContext.split('.');
  if (first) {
    const key = isNumeric(first[0] as any) ? `Svg${first} ` : first;
    const comp = iconsContext[key];
    return !comp ? null : innerGetIcons(rest.join('.'), comp);
  }
  return iconsContext;
}

export const getIcon = (path: AllIconsPath | string): React.FC<IconProps> | null => innerGetIcons(path, icons);
