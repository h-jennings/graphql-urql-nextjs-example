import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import * as React from 'react';
import { Box } from './Box';

export const ContentfulRichText = React.forwardRef(
  ({ json, ...rest }, forwardedRef) => {
    if (json == null) return null;

    return (
      <Box
        {...rest}
        ref={forwardedRef}
        css={{ '> :last-child': { marginBottom: 0 } }}
      >
        {documentToReactComponents(json)}
      </Box>
    );
  },
);

ContentfulRichText.displayName = 'ContentfulRichText';
