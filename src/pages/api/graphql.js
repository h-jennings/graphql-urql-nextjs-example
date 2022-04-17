import { createContentfulGraphQLClient } from '@graphql/client';

/**
 * This api route is purely for the purposes of being able to fetch contentful data on the client.
 *
 * Handles any requests made to `api/graphql`.
 */
const handler = async (req, res) => {
  const { query, variables } = req.body;
  try {
    const client = createContentfulGraphQLClient(variables?.preview);
    const data = await client.rawRequest(query, variables);
    res.status(200).send(data);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('error:', error);
    res.status(200).send('Server Error');
  }
};

export default handler;
