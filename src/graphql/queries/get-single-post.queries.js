import { gql } from 'urql';

export const GET_SINGLE_POST = gql`
  query GetSinglePost($preview: Boolean = false, $slug: String!) {
    pageCollection(
      where: { type: "Post", slug: $slug }
      preview: $preview
      limit: 1
    ) {
      items {
        sys {
          publishedAt
        }
        slug
        name
        description
        title
        content {
          json
        }
      }
    }
  }
`;
