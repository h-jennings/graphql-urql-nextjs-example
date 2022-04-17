import { styled, theme } from '@styles/stitches.config';

/**
 * Selectors
 */
const child = '> *';
const childWithGap = '> * + *';

/**
 * Generate `gap` prop values from theme
 */
const { space } = theme;

const gap = Object.keys(space).reduce((acc, currentValue) => {
  acc[currentValue] = {
    [childWithGap]: { $$stackGap: `$space$${currentValue}` },
  };
  return acc;
}, {});

/**
 * Stack
 */
export const Stack = styled('div', {
  display: 'flex',
  // reset list styles
  listStyleType: 'none',
  paddingLeft: 0,
  [child]: {
    margin: 0,
  },
  [childWithGap]: {
    $$stackGapLeft: 'initial',
    $$stackGapRight: 'initial',
    $$stackGapTop: 'initial',
    marginLeft: '$$stackGapLeft',
    marginTop: '$$stackGapTop',
    marginRight: '$$stackGapRight',
  },
  variants: {
    direction: {
      row: {
        flexDirection: 'row',
        alignItems: 'center',
        [childWithGap]: {
          $$stackGapLeft: '$$stackGap',
        },
      },
      'row-reverse': {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        [childWithGap]: {
          $$stackGapRight: '$$stackGap',
        },
      },
      column: {
        flexDirection: 'column',
        [childWithGap]: {
          $$stackGapTop: '$$stackGap',
        },
      },
    },
    align: {
      center: {
        alignItems: 'center',
      },
    },
    gap,
  },
  defaultVariants: {
    gap: '0',
    direction: 'column',
  },
});
