import { gql } from "@apollo/client/core";

export const TOGGLE_LIKE_MUTATION = gql`
  mutation toggleLikeMutation($postId: Float!) {
    toggleLike(postId: $postId) {
      id
      user {
        id
      }
      post {
        id
      }
    }
  }
`;
