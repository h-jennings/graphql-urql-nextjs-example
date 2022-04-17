import { gql } from 'urql';

export const GET_HOMEPAGE_CONTENT = gql`
  query GetHomepageContent($preview: Boolean = false) {
    page(id: "2wfdXN2M80QdARTun1PnFT", preview: $preview) {
      sys {
        id
        publishedAt
      }
      name
      type
      description
      title
      content {
        json
      }
    }
  }
`;
