import { css } from '@/stitches.config';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import * as React from 'react';

export const LinkBox = React.forwardRef(
  ({ className, ...rest }, forwardedRef) => {
    return (
      <div
        {...rest}
        className={`${linkBoxStyles()} ${className ?? ''}`}
        ref={forwardedRef}
      />
    );
  },
);

LinkBox.propTypes = {
  className: PropTypes.string,
};

LinkBox.displayName = 'LinkBox';

const linkBoxStyles = css({
  position: 'relative',
  'a[href]:not(.linkbox__overlay), abbr[title]': {
    position: 'relative',
    zIndex: '1',
  },
});

export const LinkOverlay = React.forwardRef(
  (
    { children, href, openNewTab = false, rel, target, className, ...rest },
    forwardedRef,
  ) => {
    return (
      <NextLink href={href} passHref>
        <a
          {...rest}
          rel={openNewTab ? 'noopener norefferer' : rel}
          target={openNewTab ? '_blank' : target}
          className={`linkbox__overlay ${linkOverlayStyles()} ${
            className ?? ''
          }`}
          ref={forwardedRef}
        >
          {children}
        </a>
      </NextLink>
    );
  },
);

LinkOverlay.propTypes = {
  href: PropTypes.string.isRequired,
  openNewTab: PropTypes.bool,
  children: PropTypes.node,
  rel: PropTypes.string,
  target: PropTypes.string,
  className: PropTypes.string,
};

LinkOverlay.displayName = 'LinkOverlay';

const linkOverlayStyles = css({
  position: 'static',
  '&::before': {
    content: "''",
    cursor: 'inherit',
    display: 'block',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    width: '$full',
    height: '$full',
  },
});
