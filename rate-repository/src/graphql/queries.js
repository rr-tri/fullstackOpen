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
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
    }
  }
`;
export const REPOSITORY_DETAILS = gql`
  query Repository($id: ID!, $after: String, $first: Int) {
    repository(id: $id) {
      id
      fullName
      language
      ownerAvatarUrl
      ratingAverage
      reviewCount
      stargazersCount
      url
      forksCount
      description
      reviews(first: $first, after: $after) {
        totalCount
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
        }
      }
    }
  }
`;
export const ME = gql`
  query getCurrentUser(
    $includeReviews: Boolean = false
    $first: Int
    $after: String
  ) {
    me {
      id
      createdAt
      username
      reviews(first: $first, after: $after) @include(if: $includeReviews) {
        totalCount
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
        edges {
          node {
            createdAt
            id
            rating
            text
            repository {
              id
              name
              fullName
            }
          }
        }
      }
    }
  }
`;

export const GET_REPOSITORIES_WITH_FILTER = gql`
  query Repositories(
    $after: String
    $orderDirection: OrderDirection
    $orderBy: AllRepositoriesOrderBy
    $searchKeyword: String
    $first: Int
  ) {
    repositories(
      after: $after
      orderDirection: $orderDirection
      orderBy: $orderBy
      searchKeyword: $searchKeyword
      first: $first
    ) {
      totalCount
      edges {
        node {
          createdAt
          description
          forksCount
          fullName
          id
          language
          name
          openIssuesCount
          ownerAvatarUrl
          ownerName
          ratingAverage
          reviewCount

          stargazersCount
          url

          userHasReviewed
          watchersCount
        }
        cursor
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`;
