import { HeadingText } from '@components/common/HeadingText';
import { Link } from '@components/common/Link';
import { UnorderedList } from '@components/common/List';
import { Stack } from '@components/common/Stack';
import { GET_ALL_POSTS } from '@graphql/queries/get-all-posts.queries';
import { initContentfulUrqlClient, withUrqlSSR } from '@graphql/urql';
import { safeObjDestructure } from '@utils/common/helpers/safe-destructure';
import * as React from 'react';
import { ssrExchange, useQuery } from 'urql';

const Posts = ({ preview }) => {
  const [{ data }] = useQuery({
    query: GET_ALL_POSTS,
    variables: { preview },
  });

  const { pageCollection } = safeObjDestructure(data);
  const items = pageCollection?.items;

  return (
    <Stack gap="2">
      <HeadingText>All Posts</HeadingText>
      <div>
        <Stack gap="1" as={UnorderedList}>
          {items?.map(({ sys, name, slug }) => (
            <li key={sys.id}>
              <Link href={`/posts/${slug}`}>{name}</Link>
            </li>
          ))}
        </Stack>
      </div>
    </Stack>
  );
};

export const getServerSideProps = async ({ preview = false }) => {
  const ssrCache = ssrExchange({ isClient: false });

  const client = initContentfulUrqlClient(ssrCache, preview);

  const result = await client?.query(GET_ALL_POSTS, { preview }).toPromise();

  const noData = result?.data?.pageCollection?.items?.length <= 0;

  if (!Boolean(result.data)) {
    return {
      props: {
        noData,
      },
    };
  }

  return {
    props: {
      // urqlState is a keyword here so withUrqlClient can pick it up.
      urqlState: ssrCache.extractData(),
      preview,
      noData,
    },
  };
};

export default withUrqlSSR(Posts);
