/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createItem = /* GraphQL */ `
  mutation CreateItem(
    $input: CreateItemInput!
    $condition: ModelItemConditionInput
  ) {
    createItem(input: $input, condition: $condition) {
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
export const updateItem = /* GraphQL */ `
  mutation UpdateItem(
    $input: UpdateItemInput!
    $condition: ModelItemConditionInput
  ) {
    updateItem(input: $input, condition: $condition) {
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
export const deleteItem = /* GraphQL */ `
  mutation DeleteItem(
    $input: DeleteItemInput!
    $condition: ModelItemConditionInput
  ) {
    deleteItem(input: $input, condition: $condition) {
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
export const createOrderItems = /* GraphQL */ `
  mutation CreateOrderItems(
    $input: CreateOrderItemsInput!
    $condition: ModelOrderItemsConditionInput
  ) {
    createOrderItems(input: $input, condition: $condition) {
      id
      orderId
      itemId
      name
      count
      total
      order {
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
      item {
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
      createdAt
      updatedAt
    }
  }
`;
export const updateOrderItems = /* GraphQL */ `
  mutation UpdateOrderItems(
    $input: UpdateOrderItemsInput!
    $condition: ModelOrderItemsConditionInput
  ) {
    updateOrderItems(input: $input, condition: $condition) {
      id
      orderId
      itemId
      name
      count
      total
      order {
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
      item {
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
      createdAt
      updatedAt
    }
  }
`;
export const deleteOrderItems = /* GraphQL */ `
  mutation DeleteOrderItems(
    $input: DeleteOrderItemsInput!
    $condition: ModelOrderItemsConditionInput
  ) {
    deleteOrderItems(input: $input, condition: $condition) {
      id
      orderId
      itemId
      name
      count
      total
      order {
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
      item {
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
      createdAt
      updatedAt
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
