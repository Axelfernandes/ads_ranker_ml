/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateAd = /* GraphQL */ `
  subscription OnCreateAd($filter: ModelSubscriptionAdFilterInput) {
    onCreateAd(filter: $filter) {
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
export const onUpdateAd = /* GraphQL */ `
  subscription OnUpdateAd($filter: ModelSubscriptionAdFilterInput) {
    onUpdateAd(filter: $filter) {
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
export const onDeleteAd = /* GraphQL */ `
  subscription OnDeleteAd($filter: ModelSubscriptionAdFilterInput) {
    onDeleteAd(filter: $filter) {
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
export const onCreateInteraction = /* GraphQL */ `
  subscription OnCreateInteraction(
    $filter: ModelSubscriptionInteractionFilterInput
  ) {
    onCreateInteraction(filter: $filter) {
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
export const onUpdateInteraction = /* GraphQL */ `
  subscription OnUpdateInteraction(
    $filter: ModelSubscriptionInteractionFilterInput
  ) {
    onUpdateInteraction(filter: $filter) {
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
export const onDeleteInteraction = /* GraphQL */ `
  subscription OnDeleteInteraction(
    $filter: ModelSubscriptionInteractionFilterInput
  ) {
    onDeleteInteraction(filter: $filter) {
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
