import { theme } from '@styles/stitches.config';

/**
 * Utility for generating `gap` variants from theme
 * @param {string} gapProperty
 */
const createGapVariant = (gapProperty) => {
  return Object.keys(theme.space).reduce((acc, key) => {
    acc[key] = {
      [gapProperty]: `$${key}`,
    };
    return acc;
  }, {});
};

export const GAP = createGapVariant('gap');
export const COLUMN_GAP = createGapVariant('columnGap');
export const ROW_GAP = createGapVariant('rowGap');

export const LINE_HEIGHT = {
  0: {
    lineHeight: '$0',
  },
  1: {
    lineHeight: '$1',
  },
  2: {
    lineHeight: '$2',
  },
  3: {
    lineHeight: '$3',
  },
};
