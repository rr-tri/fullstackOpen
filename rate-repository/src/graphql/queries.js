import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      totalCount
      edges {
        node {
          id
          fullName
          language
          name
          openIssuesCount
          ownerAvatarUrl
          ownerName
          ownerName
          ratingAverage
          reviewCount
          stargazersCount
          url
          watchersCount
          forksCount
          description
          createdAt
          userHasReviewed
        }
      }
    }
  }
`;

export const ME = gql`
  query {
    me {
      id
      username
    }
  }
`;
