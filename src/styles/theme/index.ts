import { Breakpoints } from '../styled';
import buttonTheme from './button';
import formTheme from './form';
import linkTheme from './link';
import textTheme from './text';
import variantsTheme from './variants';

const theme = {
  colors: {
    primary400: '#55F1D2',
    primary500: '#18ECC0',
    secondary400: '#984EF9',
    secondary500: '#862EF7',
    white: '#fff',
    grey100: '#F9F9F8',
    grey200: '#E2E2E0',
    grey300: '#bdbdbd',
    grey400: '#A8A8A8',
    grey600: '#969696',
    grey700: '#737373',
    grey800: '#343434',
    grey900: '#1B1B1B',
    warning100: '#FFF0BD',
    warning500: '#F0BB00',
    success100: '#DBFFE3',
    success500: '#0C9151',
    error100: '#FFD1D1',
    error500: '#CA1818',
    transparent: 'rgba(255, 255, 255, 0);',
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    bold: 700,
  },
  fonts: {
    heading: `Domaine Disp`,
    body: `Inter`,
    mono: `SFMono-Regular, Menlo, Monaco,C onsolas, "Liberation Mono", "Courier New", monospace`,
  },
  fontSizes: {
    root: '14px',
    0: '10px',
    1: '12px',
    2: '14px',
    3: '16px',
    4: '18px',
    5: '20px',
    6: '24px',
    7: '32px',
    8: '40px',
    9: '48px',
    10: '56px',
    11: '64px',
    heading: '32px',
  },
  lineHeights: {
    normal: 1,
    medium: 1.25,
    high: 1.5,
  },
  space: {
    0: 0,
    '1/4': 2,
    '1/2': 4,
    '3/4': 6,
    1: 8,
    '5/4': 10,
    '6/4': 12,
    2: 16,
    3: 24,
    4: 32,
    5: 40,
    6: 48,
    7: 56,
    8: 64,
    9: 72,
    10: 80,
    15: 120,
    20: 160,
    mobileGutter: 16,
  },
  sizes: {
    maxWidth: 1140,
  },
  breakpoints: ['768px', '1024px', '1280px', '1440px'] as Breakpoints,
  zIndices: {
    hide: -1,
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
  radii: {
    none: '0',
    xs: '4px',
    sm: '6px',
    md: '8px',
    lg: '16px',
    full: '9999px',
  },
  borders: {
    none: 0,
    '1px': '1px solid',
    '2px': '2px solid',
    '4px': '4px solid',
  },
  shadows: {
    sm: '0px 2px 0px rgba(0, 0, 0, 0.1), 0px 5px 10px rgba(0, 0, 0, 0.05)',
    md: '0px 2px 0px rgba(0, 0, 0, 0.1), 0px 5px 10px rgba(0, 0, 0, 0.05)',
    lg: '0px 2px 4px rgba(0, 0, 0, 0.1), 0px 10px 20px rgba(0, 0, 0, 0.1)',
    none: 'none',
  },
  ...buttonTheme,
  ...formTheme,
  ...linkTheme,
  ...textTheme,
  ...variantsTheme,
};

theme.breakpoints.sm = theme.breakpoints[0];
theme.breakpoints.md = theme.breakpoints[1];
theme.breakpoints.lg = theme.breakpoints[2];
theme.breakpoints.xl = theme.breakpoints[3];

export default theme;
