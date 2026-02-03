/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRankedAds = /* GraphQL */ `
  query GetRankedAds($userId: ID!) {
    getRankedAds(userId: $userId) {
      id
      title
      category
      score
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      sequence
      experimentBucket
      interests
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        sequence
        experimentBucket
        interests
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getAd = /* GraphQL */ `
  query GetAd($id: ID!) {
    getAd(id: $id) {
      id
      title
      description
      category
      embedding
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listAds = /* GraphQL */ `
  query ListAds($filter: ModelAdFilterInput, $limit: Int, $nextToken: String) {
    listAds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        category
        embedding
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getInteraction = /* GraphQL */ `
  query GetInteraction($id: ID!) {
    getInteraction(id: $id) {
      id
      userId
      adId
      type
      timestamp
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listInteractions = /* GraphQL */ `
  query ListInteractions(
    $filter: ModelInteractionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInteractions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        adId
        type
        timestamp
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
