import NextLink from 'next/link';
import * as React from 'react';
import { ActionText } from './ActionText';
import { Button } from './Button';

if (process.env.NODE_ENV !== 'production' && !process.env.NEXT_PUBLIC_URL) {
  // eslint-disable-next-line no-console
  console.warn('Link.jsx: No NEXT_PUBLIC_URL set in .env');
}

export const Link = React.forwardRef(
  (
    { href = '/', children, rel, target, type = 'link', prefetch, ...rest },
    forwardedRef,
  ) => {
    const siteUrl = new RegExp(
      `https?://(www.)?${process.env.NEXT_PUBLIC_URL}/?`,
      'g',
    );

    const formattedUrl = href.replace(siteUrl, '/');

    const isExternal = isExternalLink(formattedUrl);

    return (
      <>
        {type === 'link' ? (
          <NextLink href={formattedUrl} prefetch={prefetch} passHref>
            <ActionText
              as="a"
              {...rest}
              rel={isExternal ? 'noopener norefferer' : rel}
              target={isExternal ? '_blank' : target}
              ref={forwardedRef}
            >
              {children}
            </ActionText>
          </NextLink>
        ) : null}
        {type === 'button' ? (
          <NextLink href={formattedUrl} prefetch={prefetch} passHref>
            <Button
              as="a"
              {...rest}
              rel={isExternal ? 'noopener norefferer' : rel}
              target={isExternal ? '_blank' : target}
              ref={forwardedRef}
            >
              {children}
            </Button>
          </NextLink>
        ) : null}
      </>
    );
  },
);

Link.displayName = 'Link';

const isExternalLink = (href) => {
  const externalLinkRegex = /^https?:\/\//;
  const mailToRegex = /^mailto\:/;
  return externalLinkRegex.test(href) || mailToRegex.test(href);
};
