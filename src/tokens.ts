export const palette = {
  accent: '#F6643A',
  primary: '#1A4757',
  primaryDark: '#132F3A',
  primaryLight: '#2A6374',
  secondary: '#617F9E',
  highlight: '#46F1C8',
  highlightDark: '#38C4A0',
  surfaceLight: '#EFEFEF',
  surfaceMid: '#DADADA',
  surfaceDark: '#2C2C2C',
  surfaceDarkDeep: '#1A1A1A',
  textDark: '#2C2C2C',
  textMid: '#8A8A8A',
  textLight: '#A0A0A0',
  textMuted: '#707070',
  textWhite: '#EFEFEF',
  border: '#C0C0C0',
  tertiary: '#A675A1',
  white: '#FFFFFF',
  black: '#000000',
} as const;

export const darkTheme = {
  heading: palette.highlight,
  text: palette.textWhite,
  textSecondary: palette.textLight,
  textMuted: palette.textMid,
  background: palette.surfaceDarkDeep,
  surface: palette.surfaceDark,
  border: palette.surfaceDark,
  accent: palette.accent,
} as const;

export const fonts = {
  sans: 'Inter',
  weights: [400, 500, 600, 700] as const,
} as const;
