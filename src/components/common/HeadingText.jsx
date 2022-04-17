import { styled } from '@styles/stitches.config';

export const HeadingText = styled('h2', {
  fontFamily: '$primary',
  fontWeight: '$regular',
  lineHeight: '$1',
  variants: {
    size: {
      '-2': { fontSize: '$-2' },
      '-1': { fontSize: '$-1' },
      0: { fontSize: '$0' },
      1: { fontSize: '$1' },
      2: { fontSize: '$2' },
    },
    width: {
      prose: {
        maxWidth: '$prose',
      },
    },
    center: {
      true: {
        textAlign: 'center',
        marginX: 'auto',
      },
    },
  },
  defaultVariants: {
    size: '2',
  },
});
