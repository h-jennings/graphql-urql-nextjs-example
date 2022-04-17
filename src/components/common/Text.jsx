import { css, styled } from '@styles/stitches.config';
import { LINE_HEIGHT } from '@utils/common/constants/theme.constants';

export const text = css({
  variants: {
    limitX: {
      true: {
        maxWidth: '$prose',
      },
      false: {
        maxWidth: '$full',
      },
    },
    inline: {
      true: {
        display: 'inline',
      },
      false: {
        display: 'block',
      },
    },
    size: {
      '-2': { fontSize: '$-2' },
      '-1': { fontSize: '$-1' },
      0: { fontSize: '$0' },
      1: { fontSize: '$1' },
    },
    color: {
      primary: { color: '$textPrimary' },
    },
    leading: {
      ...LINE_HEIGHT,
    },
    fontStyle: {
      normal: {
        fontStyle: 'normal',
      },
      italic: {
        fontStyle: 'italic',
      },
    },
    weight: {
      light: {
        fontWeight: '$light',
      },
      regular: {
        fontWeight: '$regular',
      },
      medium: {
        fontWeight: '$medium',
      },
      bold: {
        fontWeight: '$bold',
      },
    },
  },
  defaultVariants: {
    color: 'primary',
    weight: 'regular',
    leading: '$2',
    fontStyle: 'normal',
  },
});

export const Text = styled('span', text);

// Html Elements
export const Quote = styled('q', text);
export const Paragraph = styled('p', text);
export const ListItem = styled('li', text);
export const Small = styled('small', text);
export const Deleted = styled('del', text);
export const H1 = styled('h1', text);
export const H2 = styled('h2', text);
export const H3 = styled('h3', text);
export const H4 = styled('h4', text);
export const H5 = styled('h5', text);
export const H6 = styled('h6', text);
