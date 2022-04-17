import { gql } from 'urql';

export const GET_ALL_POSTS = gql`
  query GetAllPosts($preview: Boolean = false) {
    pageCollection(where: { type: "Post" }, preview: $preview, limit: 50) {
      items {
        sys {
          id
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
