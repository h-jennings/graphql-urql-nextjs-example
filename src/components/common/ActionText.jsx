import { css, styled } from '@styles/stitches.config';
import { LINE_HEIGHT } from '@utils/common/constants/theme.constants';

export const actionText = css({
  fontWeight: '$regular',
  variants: {
    alignment: {
      left: {
        textAlign: 'left',
      },
      right: {
        textAlign: 'right',
      },
      center: {
        textAlign: 'center',
      },
    },
    leading: {
      ...LINE_HEIGHT,
    },
    color: {
      primary: { color: '$textPrimary' },
      action: {
        color: '$action',
        transition: '$default',
        transitionProperty: 'color',
        hover: {
          color: '$actionHover',
        },
      },
    },
    type: {
      base: {
        fontSize: '$0',
      },
      small: {
        fontSize: '$-1',
      },
    },
  },
  defaultVariants: {
    type: 'base',
    color: 'primary',
    leading: '1',
  },
});

export const ActionText = styled('span', actionText);
