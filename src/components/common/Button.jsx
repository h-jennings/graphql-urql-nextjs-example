import { css, styled } from '@styles/stitches.config';

export const buttonReset = css({
  border: 'none',
  padding: 0,
  width: 'auto',
  overflow: 'visible',
  background: 'transparent',
  color: 'inherit',
  lineHeight: 'normal',
  fontSmooth: 'inherit',
  appearance: 'none',
  cursor: 'pointer',
});

export const Button = styled('button', buttonReset, {
  fontFamily: '$primary',
  fontSize: '$0',
  fontWeight: '$medium',
  minHeight: 48,
  minWidth: 270,
  backgroundColor: '$black',
  textAlign: 'center',
  lineHeight: '$0',
  color: '$white',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '$pill',
  padding: '$0 $1',
  transition: '$default',
  transitionProperty: 'color, background-color',
  textDecoration: 'none',

  hover: {
    backgroundColor: '$charcoal',
  },
});
