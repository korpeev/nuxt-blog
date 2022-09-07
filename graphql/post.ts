import { gql } from "@apollo/client/core";

export const GET_ALL_POSTS_QUERY = gql`
  query GetAllPosts {
    getPosts {
      id
      title
      content
      createdAt
      updatedAt
      user {
        username
      }
      comments {
        id
        user {
          id
          username
        }
      }
      likes {
        id
        user {
          id
          username
        }
      }
    }
  }
`;
