/* eslint-disable consistent-return */
/* eslint-disable no-undef */
import { hslToRgb, rgbToHex } from '@material-ui/core';

// import { BaseColor } from './palette/types';

/* eslint-disable no-param-reassign */

// copy-paste from https://css-tricks.com/converting-color-spaces-in-javascript/
export const RGBToHSL = (r: number, g: number, b: number) => {
  // Make r, g, and b fractions of 1
  r /= 255;
  g /= 255;
  b /= 255;

  // Find greatest and smallest channel values
  const cmin = Math.min(r, g, b);
  const cmax = Math.max(r, g, b);
  const delta = cmax - cmin;
  let h = 0;
  let s = 0;
  let l = 0;

  // Calculate hue
  // No difference
  if (delta === 0) h = 0;
  // Red is max
  else if (cmax === r) h = ((g - b) / delta) % 6;
  // Green is max
  else if (cmax === g) h = (b - r) / delta + 2;
  // Blue is max
  else h = (r - g) / delta + 4;

  h = Math.round(h * 60);

  // Make negative hues positive behind 360°
  if (h < 0) h += 360;

  // Calculate lightness
  l = (cmax + cmin) / 2;

  // Calculate saturation
  s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

  // Multiply l and s by 100
  s = +(s * 100).toFixed(1);
  l = +(l * 100).toFixed(1);

  return { h, s, l };
};


export const toHsl = (h?: number, s?: number, l?: number): string =>
  `hsl(${h}, ${s}, ${l}%)`;

export const hslToHex = (hsl: string) => rgbToHex(hslToRgb(hsl));

export const hexTransparency = (percentage: number) => {
  if (percentage < 0) return;
  if (percentage < 1) percentage *= 100;
  return Math.round(percentage * 2.55).toString(16)
}
