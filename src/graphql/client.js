import { getBearerToken } from '@utils/common/helpers/get-bearer-token.helpers';
import { GraphQLClient } from 'graphql-request';
import { GET_HOMEPAGE_CONTENT } from './queries/get-homepage-content.queries';
import { GET_SINGLE_POST } from './queries/get-single-post.queries';

/**
 * We need a non-urql client to handle requests in api routes or for global SSR data. Basically anywhere that an urql client can't/won't exist.
 */
export const createContentfulGraphQLClient = (preview = false) => {
  return new GraphQLClient(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CTF_SPACE}`,
    {
      headers: {
        authorization: getBearerToken(preview),
      },
    },
  );
};

/**
 * We want to make the query request that corresponds with the slug
 */
export const getPreviewContent = (slug) => {
  for (let obj of REQUEST_LOOKUP) {
    if (obj.regex.test(slug)) {
      return obj.previewRequestFn(getUniqueSlug(slug));
    }
  }
};

const REQUEST_LOOKUP = [
  {
    regex: new RegExp(/^\/$/, 'g'),
    previewRequestFn: () => makePreviewRequest(GET_HOMEPAGE_CONTENT),
  },
  {
    regex: new RegExp(/^\/post/, 'g'),
    previewRequestFn: (slug) => makePreviewRequest(GET_SINGLE_POST, { slug }),
  },
];

const getUniqueSlug = (slug) => {
  if (slug === '/') return slug;

  // No need to split if slug doesn't have a `/`
  const hasSlash = new RegExp(/\//).test(slug);
  if (!hasSlash) return slug;

  // return the last value (our page) from the split
  return slug?.split?.('/')?.slice?.(-1)?.[0];
};

const makePreviewRequest = async (query, variables = {}) => {
  const preview = true;
  try {
    return await createContentfulGraphQLClient(preview).request(query, {
      preview,
      ...variables,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('error:', error);
  }
};
