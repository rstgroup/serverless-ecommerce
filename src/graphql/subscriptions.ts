/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem {
    onCreateItem {
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
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem {
    onUpdateItem {
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
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem {
    onDeleteItem {
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
export const onCreateOrderItems = /* GraphQL */ `
  subscription OnCreateOrderItems {
    onCreateOrderItems {
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
export const onUpdateOrderItems = /* GraphQL */ `
  subscription OnUpdateOrderItems {
    onUpdateOrderItems {
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
export const onDeleteOrderItems = /* GraphQL */ `
  subscription OnDeleteOrderItems {
    onDeleteOrderItems {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
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
