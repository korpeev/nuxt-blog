import { gql } from "@apollo/client/core";

export const userLoginMutation = gql`
  mutation loginUser($loginData: UserLoginInput!) {
    login(userData: $loginData) {
      email
      accessToken
      username
    }
  }
`;

export const userRegisterMutation = gql`
  mutation registerUser($registerData: UserRegisterInput!) {
    register(userData: $registerData) {
      id
      id
      username
      email
      accessToken
    }
  }
`;

export const userProfileQuery = gql`
  query userProfile {
    getProfile {
      id
      username
      email
    }
  }
`;
