import { ContentfulRichText } from '@components/common/ContentfulRichText';
import { HeadingText } from '@components/common/HeadingText';
import { Stack } from '@components/common/Stack';
import { Text } from '@components/common/Text';
import { GET_HOMEPAGE_CONTENT } from '@graphql/queries/get-homepage-content.queries';
import { initContentfulUrqlClient, withUrqlSSR } from '@graphql/urql';
import { prettyDate } from '@utils/common/helpers/pretty-date.helpers';
import { safeObjDestructure } from '@utils/common/helpers/safe-destructure';
import * as React from 'react';
import { ssrExchange, useQuery } from 'urql';

const Index = ({ preview }) => {
  const [{ data }] = useQuery({
    query: GET_HOMEPAGE_CONTENT,
    variables: { preview },
  });

  const { page } = safeObjDestructure(data);
  const { content } = safeObjDestructure(page);
  const lastPublished = page?.sys?.publishedAt;

  return (
    <Stack gap="2">
      <HeadingText>{page?.title}</HeadingText>
      {lastPublished ? (
        <Text>Last updated: {prettyDate(lastPublished)}</Text>
      ) : null}
      <ContentfulRichText json={content?.json} />
    </Stack>
  );
};

export const getServerSideProps = async ({ preview = false }) => {
  const ssrCache = ssrExchange({ isClient: false });

  const client = initContentfulUrqlClient(ssrCache, preview);

  const result = await client
    ?.query(GET_HOMEPAGE_CONTENT, { preview })
    .toPromise();

  const noData = result?.data?.page == null;

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

export default withUrqlSSR(Index);
