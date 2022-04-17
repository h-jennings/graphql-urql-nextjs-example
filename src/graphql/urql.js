import { getBearerToken } from '@utils/common/helpers/get-bearer-token.helpers';
import { initUrqlClient, withUrqlClient } from 'next-urql';
import { cacheExchange, dedupExchange, fetchExchange } from 'urql';

/**
 * Initializes an urql client to be used within `getServerSideProps` or `getStaticProps`.
 */
export const initContentfulUrqlClient = (ssrCache, preview = false) => {
  return initUrqlClient(
    {
      url: `https://graphql.contentful.com/content/v1/spaces/${process.env.CTF_SPACE}`,
      fetchOptions: {
        headers: {
          Authorization: getBearerToken(preview),
        },
      },
      exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
      suspense: false,
    },
    false,
  );
};

/**
 * For pages that use SSR, this function wraps a Next.js page with an urql GraphQL client. This allows us to use GraphQL and hydrate our pages with dynamic data from Contentful.
 * @param {*} Page - A Next.js page
 */
export const withUrqlSSR = (Page) =>
  withUrqlClient(
    () => ({
      url: isSSR
        ? `https://graphql.contentful.com/content/v1/spaces/${process.env.CTF_SPACE}`
        : `/api/graphql`,
      fetchOptions: {
        headers: {
          Authorization: isSSR ? `Bearer ${process.env.CTF_PROD_TOKEN}` : '',
        },
      },
    }),
    { ssr: false, neverSuspend: true },
  )(Page);

const isSSR = typeof window === undefined;
