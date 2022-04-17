import { ContentfulRichText } from '@components/common/ContentfulRichText';
import { HeadingText } from '@components/common/HeadingText';
import { Stack } from '@components/common/Stack';
import { Text } from '@components/common/Text';
import { GET_SINGLE_POST } from '@graphql/queries/get-single-post.queries';
import { initContentfulUrqlClient, withUrqlSSR } from '@graphql/urql';
import { prettyDate } from '@utils/common/helpers/pretty-date.helpers';
import { safeObjDestructure } from '@utils/common/helpers/safe-destructure';
import * as React from 'react';
import { ssrExchange, useQuery } from 'urql';

const Post = ({ preview, slug }) => {
  const [{ data }] = useQuery({
    query: GET_SINGLE_POST,
    variables: { preview, slug },
  });

  const post = data?.pageCollection?.items?.[0];

  const { title, content, sys } = safeObjDestructure(post);
  const lastPublished = sys?.publishedAt;

  return (
    <Stack gap="2">
      <HeadingText>{title}</HeadingText>
      {lastPublished ? (
        <Text>Last updated: {prettyDate(lastPublished)}</Text>
      ) : null}
      <ContentfulRichText json={content?.json} />
    </Stack>
  );
};

export const getServerSideProps = async ({ preview = false, params }) => {
  const { slug } = safeObjDestructure(params);
  const ssrCache = ssrExchange({ isClient: false });

  const client = initContentfulUrqlClient(ssrCache, preview);

  const result = await client
    ?.query(GET_SINGLE_POST, { preview, slug })
    .toPromise();

  const noData = result?.data?.pageCollection?.items?.length === 0;

  // We don't want to pass any props to the page when there isn't any data
  // - This would be mostly due to a bad request/query
  if (noData || result?.data == null) {
    return {
      props: {},
      notFound: true,
    };
  }

  return {
    props: {
      // urqlState is a keyword here so withUrqlClient can pick it up.
      urqlState: ssrCache.extractData(),
      preview,
      slug,
      noData,
    },
  };
};

export default withUrqlSSR(Post);
