import { createStitches } from '@stitches/react';

const BREAKPOINTS = {
  desktop: '1681px',
  desktopSm: '1440px',
  laptop: '1380px',
  laptopSm: '1240px',
  tablet: '1080px',
  portrait: '880px',
  mobile: '767px',
  mobileMid: '625px',
  mobileSm: '580px',
  mobileRealSm: '375px',
};

const media = Object.entries(BREAKPOINTS).reduce((acc, [key, val]) => {
  const name = key.charAt(0).toUpperCase() + key.slice(1);
  acc[`below${name}`] = `(width < ${val})`;
  acc[`above${name}`] = `(width >= ${val})`;

  return acc;
}, {});

export const {
  css,
  styled,
  theme,
  keyframes,
  getCssText,
  createTheme,
  globalCss,
  config,
} = createStitches({
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      charcoal: '#344048',
      graphite: '#676F71',

      // Tokens
      uiBackground: '$white',
      textPrimary: '$black',
      action: '$charcoal',
      actionHover: '$graphite',
    },
    space: {
      0: '8px',
      1: '16px',
      2: '24px',
      3: '32px',
      4: '40px',
    },
    sizes: {
      full: '100%',
      prose: '60ch',
      desktop: '1440px',
      wide: '1920px',
      screenW: '100vw',
      screenH: '100vh',
    },
    radii: {
      pill: '999px',
      circle: '50%',
    },
    fonts: {
      primary:
        '"Untitled Sans", -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif;',
    },
    fontSizes: {
      '-2': '.75rem',
      '-1': '.875rem',
      0: '1rem',
      1: '1.125rem',
      2: '1.625rem',
    },
    fontWeights: {
      light: 300,
      regular: 400,
      medium: 600,
      bold: 700,
    },
    lineHeights: {
      0: 1,
      1: 1.1,
      2: 1.25,
      3: 1.33,
    },
    zIndices: {
      init: 0,
      main: 10,
      nav: 20,
      nuclear: 9999,
    },
    transitions: {
      default: '225ms cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },
  utils: {
    marginX: (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingX: (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    hover: (val) => ({
      '@media(hover: hover)': {
        '&:hover': val,
      },
    }),
    aspect: (value) => ({
      aspectRatio: value,

      '@supports not (aspect-ratio: auto)': {
        '&::before': {
          float: 'left',
          paddingTop: `calc(${value})`,
          content: '',
        },
        '&::after': {
          display: 'block',
          content: '',
          clear: 'both',
        },
      },
    }),
  },
  media,
});
