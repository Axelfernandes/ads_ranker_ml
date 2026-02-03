/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createAd = /* GraphQL */ `
  mutation CreateAd($input: CreateAdInput!, $condition: ModelAdConditionInput) {
    createAd(input: $input, condition: $condition) {
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
export const updateAd = /* GraphQL */ `
  mutation UpdateAd($input: UpdateAdInput!, $condition: ModelAdConditionInput) {
    updateAd(input: $input, condition: $condition) {
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
export const deleteAd = /* GraphQL */ `
  mutation DeleteAd($input: DeleteAdInput!, $condition: ModelAdConditionInput) {
    deleteAd(input: $input, condition: $condition) {
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
export const createInteraction = /* GraphQL */ `
  mutation CreateInteraction(
    $input: CreateInteractionInput!
    $condition: ModelInteractionConditionInput
  ) {
    createInteraction(input: $input, condition: $condition) {
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
export const updateInteraction = /* GraphQL */ `
  mutation UpdateInteraction(
    $input: UpdateInteractionInput!
    $condition: ModelInteractionConditionInput
  ) {
    updateInteraction(input: $input, condition: $condition) {
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
export const deleteInteraction = /* GraphQL */ `
  mutation DeleteInteraction(
    $input: DeleteInteractionInput!
    $condition: ModelInteractionConditionInput
  ) {
    deleteInteraction(input: $input, condition: $condition) {
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
