import { gql } from "@apollo/client";

export const AUTHENTICATE = gql`
  mutation Authenticate($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      user {
        createdAt
        id
        username
        reviewCount
      }
      accessToken
      expiresAt
    }
  }
`;
