/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      orders {
        items {
          id
          userId
          date
          totalOrder
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
        email
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getItem = /* GraphQL */ `
  query GetItem($id: ID!) {
    getItem(id: $id) {
      id
      title
      itemDescription
      type
      photoPath
      price
      orders {
        items {
          id
          orderId
          itemId
          name
          count
          total
          createdAt
          updatedAt
        }
        nextToken
      }
      updatedAt
      createdAt
    }
  }
`;
export const listItems = /* GraphQL */ `
  query ListItems(
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        itemDescription
        type
        photoPath
        price
        orders {
          nextToken
        }
        updatedAt
        createdAt
      }
      nextToken
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
      id
      items {
        items {
          id
          orderId
          itemId
          name
          count
          total
          createdAt
          updatedAt
        }
        nextToken
      }
      userId
      date
      totalOrder
      status
      createdAt
      updatedAt
    }
  }
`;
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        items {
          nextToken
        }
        userId
        date
        totalOrder
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getItemsByPrice = /* GraphQL */ `
  query GetItemsByPrice(
    $type: String
    $price: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getItemsByPrice(
      type: $type
      price: $price
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        itemDescription
        type
        photoPath
        price
        orders {
          nextToken
        }
        updatedAt
        createdAt
      }
      nextToken
    }
  }
`;
export const getItemsByUpdatedAt = /* GraphQL */ `
  query GetItemsByUpdatedAt(
    $type: String
    $updatedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getItemsByUpdatedAt(
      type: $type
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        itemDescription
        type
        photoPath
        price
        orders {
          nextToken
        }
        updatedAt
        createdAt
      }
      nextToken
    }
  }
`;
export const ordersByUser = /* GraphQL */ `
  query OrdersByUser(
    $userId: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ordersByUser(
      userId: $userId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        items {
          nextToken
        }
        userId
        date
        totalOrder
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
