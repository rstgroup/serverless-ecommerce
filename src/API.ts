/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  email: string,
};

export type ModelUserConditionInput = {
  email?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  email: string,
  orders?: ModelOrderConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelOrderConnection = {
  __typename: "ModelOrderConnection",
  items?:  Array<Order | null > | null,
  nextToken?: string | null,
};

export type Order = {
  __typename: "Order",
  id: string,
  items?: ModelOrderItemsConnection | null,
  userId: string,
  date?: string | null,
  totalOrder?: number | null,
  status?: OrderStatus | null,
  createdAt?: string | null,
  updatedAt: string,
};

export type ModelOrderItemsConnection = {
  __typename: "ModelOrderItemsConnection",
  items?:  Array<OrderItems | null > | null,
  nextToken?: string | null,
};

export type OrderItems = {
  __typename: "OrderItems",
  id: string,
  orderId: string,
  itemId: string,
  name: string,
  count: number,
  total: number,
  order?: Order | null,
  item?: Item | null,
  createdAt: string,
  updatedAt: string,
};

export type Item = {
  __typename: "Item",
  id: string,
  title: string,
  itemDescription?: string | null,
  type: string,
  photoPath?: string | null,
  price: number,
  orders?: ModelOrderItemsConnection | null,
  updatedAt: string,
  createdAt: string,
};

export enum OrderStatus {
  NEW = "NEW",
  IN_PROGRESS = "IN_PROGRESS",
}


export type UpdateUserInput = {
  id: string,
  email?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateItemInput = {
  id?: string | null,
  title: string,
  itemDescription?: string | null,
  type: string,
  photoPath?: string | null,
  price: number,
  updatedAt?: string | null,
};

export type ModelItemConditionInput = {
  title?: ModelStringInput | null,
  itemDescription?: ModelStringInput | null,
  type?: ModelStringInput | null,
  photoPath?: ModelStringInput | null,
  price?: ModelIntInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelItemConditionInput | null > | null,
  or?: Array< ModelItemConditionInput | null > | null,
  not?: ModelItemConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateItemInput = {
  id: string,
  title?: string | null,
  itemDescription?: string | null,
  type?: string | null,
  photoPath?: string | null,
  price?: number | null,
  updatedAt?: string | null,
};

export type DeleteItemInput = {
  id: string,
};

export type CreateOrderItemsInput = {
  id?: string | null,
  orderId: string,
  itemId: string,
  name: string,
  count: number,
  total: number,
};

export type ModelOrderItemsConditionInput = {
  orderId?: ModelIDInput | null,
  itemId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  count?: ModelIntInput | null,
  total?: ModelIntInput | null,
  and?: Array< ModelOrderItemsConditionInput | null > | null,
  or?: Array< ModelOrderItemsConditionInput | null > | null,
  not?: ModelOrderItemsConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateOrderItemsInput = {
  id: string,
  orderId?: string | null,
  itemId?: string | null,
  name?: string | null,
  count?: number | null,
  total?: number | null,
};

export type DeleteOrderItemsInput = {
  id: string,
};

export type CreateOrderInput = {
  id?: string | null,
  userId: string,
  date?: string | null,
  totalOrder?: number | null,
  status?: OrderStatus | null,
  createdAt?: string | null,
};

export type ModelOrderConditionInput = {
  userId?: ModelIDInput | null,
  date?: ModelStringInput | null,
  totalOrder?: ModelIntInput | null,
  status?: ModelOrderStatusInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelOrderConditionInput | null > | null,
  or?: Array< ModelOrderConditionInput | null > | null,
  not?: ModelOrderConditionInput | null,
};

export type ModelOrderStatusInput = {
  eq?: OrderStatus | null,
  ne?: OrderStatus | null,
};

export type UpdateOrderInput = {
  id: string,
  userId?: string | null,
  date?: string | null,
  totalOrder?: number | null,
  status?: OrderStatus | null,
  createdAt?: string | null,
};

export type DeleteOrderInput = {
  id: string,
};

export type ModelOrderFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  date?: ModelStringInput | null,
  totalOrder?: ModelIntInput | null,
  status?: ModelOrderStatusInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelOrderFilterInput | null > | null,
  or?: Array< ModelOrderFilterInput | null > | null,
  not?: ModelOrderFilterInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
};

export type ModelItemFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  itemDescription?: ModelStringInput | null,
  type?: ModelStringInput | null,
  photoPath?: ModelStringInput | null,
  price?: ModelIntInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelItemFilterInput | null > | null,
  or?: Array< ModelItemFilterInput | null > | null,
  not?: ModelItemFilterInput | null,
};

export type ModelItemConnection = {
  __typename: "ModelItemConnection",
  items?:  Array<Item | null > | null,
  nextToken?: string | null,
};

export type ModelIntKeyConditionInput = {
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    email: string,
    orders?:  {
      __typename: "ModelOrderConnection",
      items?:  Array< {
        __typename: "Order",
        id: string,
        userId: string,
        date?: string | null,
        totalOrder?: number | null,
        status?: OrderStatus | null,
        createdAt?: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    email: string,
    orders?:  {
      __typename: "ModelOrderConnection",
      items?:  Array< {
        __typename: "Order",
        id: string,
        userId: string,
        date?: string | null,
        totalOrder?: number | null,
        status?: OrderStatus | null,
        createdAt?: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    email: string,
    orders?:  {
      __typename: "ModelOrderConnection",
      items?:  Array< {
        __typename: "Order",
        id: string,
        userId: string,
        date?: string | null,
        totalOrder?: number | null,
        status?: OrderStatus | null,
        createdAt?: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateItemMutationVariables = {
  input: CreateItemInput,
  condition?: ModelItemConditionInput | null,
};

export type CreateItemMutation = {
  createItem?:  {
    __typename: "Item",
    id: string,
    title: string,
    itemDescription?: string | null,
    type: string,
    photoPath?: string | null,
    price: number,
    orders?:  {
      __typename: "ModelOrderItemsConnection",
      items?:  Array< {
        __typename: "OrderItems",
        id: string,
        orderId: string,
        itemId: string,
        name: string,
        count: number,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    createdAt: string,
  } | null,
};

export type UpdateItemMutationVariables = {
  input: UpdateItemInput,
  condition?: ModelItemConditionInput | null,
};

export type UpdateItemMutation = {
  updateItem?:  {
    __typename: "Item",
    id: string,
    title: string,
    itemDescription?: string | null,
    type: string,
    photoPath?: string | null,
    price: number,
    orders?:  {
      __typename: "ModelOrderItemsConnection",
      items?:  Array< {
        __typename: "OrderItems",
        id: string,
        orderId: string,
        itemId: string,
        name: string,
        count: number,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    createdAt: string,
  } | null,
};

export type DeleteItemMutationVariables = {
  input: DeleteItemInput,
  condition?: ModelItemConditionInput | null,
};

export type DeleteItemMutation = {
  deleteItem?:  {
    __typename: "Item",
    id: string,
    title: string,
    itemDescription?: string | null,
    type: string,
    photoPath?: string | null,
    price: number,
    orders?:  {
      __typename: "ModelOrderItemsConnection",
      items?:  Array< {
        __typename: "OrderItems",
        id: string,
        orderId: string,
        itemId: string,
        name: string,
        count: number,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    createdAt: string,
  } | null,
};

export type CreateOrderItemsMutationVariables = {
  input: CreateOrderItemsInput,
  condition?: ModelOrderItemsConditionInput | null,
};

export type CreateOrderItemsMutation = {
  createOrderItems?:  {
    __typename: "OrderItems",
    id: string,
    orderId: string,
    itemId: string,
    name: string,
    count: number,
    total: number,
    order?:  {
      __typename: "Order",
      id: string,
      items?:  {
        __typename: "ModelOrderItemsConnection",
        nextToken?: string | null,
      } | null,
      userId: string,
      date?: string | null,
      totalOrder?: number | null,
      status?: OrderStatus | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    item?:  {
      __typename: "Item",
      id: string,
      title: string,
      itemDescription?: string | null,
      type: string,
      photoPath?: string | null,
      price: number,
      orders?:  {
        __typename: "ModelOrderItemsConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
      createdAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateOrderItemsMutationVariables = {
  input: UpdateOrderItemsInput,
  condition?: ModelOrderItemsConditionInput | null,
};

export type UpdateOrderItemsMutation = {
  updateOrderItems?:  {
    __typename: "OrderItems",
    id: string,
    orderId: string,
    itemId: string,
    name: string,
    count: number,
    total: number,
    order?:  {
      __typename: "Order",
      id: string,
      items?:  {
        __typename: "ModelOrderItemsConnection",
        nextToken?: string | null,
      } | null,
      userId: string,
      date?: string | null,
      totalOrder?: number | null,
      status?: OrderStatus | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    item?:  {
      __typename: "Item",
      id: string,
      title: string,
      itemDescription?: string | null,
      type: string,
      photoPath?: string | null,
      price: number,
      orders?:  {
        __typename: "ModelOrderItemsConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
      createdAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteOrderItemsMutationVariables = {
  input: DeleteOrderItemsInput,
  condition?: ModelOrderItemsConditionInput | null,
};

export type DeleteOrderItemsMutation = {
  deleteOrderItems?:  {
    __typename: "OrderItems",
    id: string,
    orderId: string,
    itemId: string,
    name: string,
    count: number,
    total: number,
    order?:  {
      __typename: "Order",
      id: string,
      items?:  {
        __typename: "ModelOrderItemsConnection",
        nextToken?: string | null,
      } | null,
      userId: string,
      date?: string | null,
      totalOrder?: number | null,
      status?: OrderStatus | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    item?:  {
      __typename: "Item",
      id: string,
      title: string,
      itemDescription?: string | null,
      type: string,
      photoPath?: string | null,
      price: number,
      orders?:  {
        __typename: "ModelOrderItemsConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
      createdAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateOrderMutationVariables = {
  input: CreateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type CreateOrderMutation = {
  createOrder?:  {
    __typename: "Order",
    id: string,
    items?:  {
      __typename: "ModelOrderItemsConnection",
      items?:  Array< {
        __typename: "OrderItems",
        id: string,
        orderId: string,
        itemId: string,
        name: string,
        count: number,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    userId: string,
    date?: string | null,
    totalOrder?: number | null,
    status?: OrderStatus | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateOrderMutationVariables = {
  input: UpdateOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type UpdateOrderMutation = {
  updateOrder?:  {
    __typename: "Order",
    id: string,
    items?:  {
      __typename: "ModelOrderItemsConnection",
      items?:  Array< {
        __typename: "OrderItems",
        id: string,
        orderId: string,
        itemId: string,
        name: string,
        count: number,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    userId: string,
    date?: string | null,
    totalOrder?: number | null,
    status?: OrderStatus | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteOrderMutationVariables = {
  input: DeleteOrderInput,
  condition?: ModelOrderConditionInput | null,
};

export type DeleteOrderMutation = {
  deleteOrder?:  {
    __typename: "Order",
    id: string,
    items?:  {
      __typename: "ModelOrderItemsConnection",
      items?:  Array< {
        __typename: "OrderItems",
        id: string,
        orderId: string,
        itemId: string,
        name: string,
        count: number,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    userId: string,
    date?: string | null,
    totalOrder?: number | null,
    status?: OrderStatus | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type ListOrdersWithItemsQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrdersWithItemsQuery = {
  listOrders?:  {
    __typename: "ModelOrderConnection",
    items?:  Array< {
      __typename: "Order",
      id: string,
      items?:  {
        __typename: "ModelOrderItemsConnection",
        items?:  Array< {
          __typename: "OrderItems",
          itemId: string,
          count: number,
          total: number,
        } | null > | null,
        nextToken?: string | null,
      } | null,
      userId: string,
      date?: string | null,
      status?: OrderStatus | null,
      totalOrder?: number | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    email: string,
    orders?:  {
      __typename: "ModelOrderConnection",
      items?:  Array< {
        __typename: "Order",
        id: string,
        userId: string,
        date?: string | null,
        totalOrder?: number | null,
        status?: OrderStatus | null,
        createdAt?: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      email: string,
      orders?:  {
        __typename: "ModelOrderConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetItemQueryVariables = {
  id: string,
};

export type GetItemQuery = {
  getItem?:  {
    __typename: "Item",
    id: string,
    title: string,
    itemDescription?: string | null,
    type: string,
    photoPath?: string | null,
    price: number,
    orders?:  {
      __typename: "ModelOrderItemsConnection",
      items?:  Array< {
        __typename: "OrderItems",
        id: string,
        orderId: string,
        itemId: string,
        name: string,
        count: number,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    createdAt: string,
  } | null,
};

export type ListItemsQueryVariables = {
  filter?: ModelItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListItemsQuery = {
  listItems?:  {
    __typename: "ModelItemConnection",
    items?:  Array< {
      __typename: "Item",
      id: string,
      title: string,
      itemDescription?: string | null,
      type: string,
      photoPath?: string | null,
      price: number,
      orders?:  {
        __typename: "ModelOrderItemsConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
      createdAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetOrderQueryVariables = {
  id: string,
};

export type GetOrderQuery = {
  getOrder?:  {
    __typename: "Order",
    id: string,
    items?:  {
      __typename: "ModelOrderItemsConnection",
      items?:  Array< {
        __typename: "OrderItems",
        id: string,
        orderId: string,
        itemId: string,
        name: string,
        count: number,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    userId: string,
    date?: string | null,
    totalOrder?: number | null,
    status?: OrderStatus | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type ListOrdersQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrdersQuery = {
  listOrders?:  {
    __typename: "ModelOrderConnection",
    items?:  Array< {
      __typename: "Order",
      id: string,
      items?:  {
        __typename: "ModelOrderItemsConnection",
        nextToken?: string | null,
      } | null,
      userId: string,
      date?: string | null,
      totalOrder?: number | null,
      status?: OrderStatus | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetItemsByPriceQueryVariables = {
  type?: string | null,
  price?: ModelIntKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetItemsByPriceQuery = {
  getItemsByPrice?:  {
    __typename: "ModelItemConnection",
    items?:  Array< {
      __typename: "Item",
      id: string,
      title: string,
      itemDescription?: string | null,
      type: string,
      photoPath?: string | null,
      price: number,
      orders?:  {
        __typename: "ModelOrderItemsConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
      createdAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetItemsByUpdatedAtQueryVariables = {
  type?: string | null,
  updatedAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetItemsByUpdatedAtQuery = {
  getItemsByUpdatedAt?:  {
    __typename: "ModelItemConnection",
    items?:  Array< {
      __typename: "Item",
      id: string,
      title: string,
      itemDescription?: string | null,
      type: string,
      photoPath?: string | null,
      price: number,
      orders?:  {
        __typename: "ModelOrderItemsConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
      createdAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OrdersByUserQueryVariables = {
  userId?: string | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type OrdersByUserQuery = {
  ordersByUser?:  {
    __typename: "ModelOrderConnection",
    items?:  Array< {
      __typename: "Order",
      id: string,
      items?:  {
        __typename: "ModelOrderItemsConnection",
        nextToken?: string | null,
      } | null,
      userId: string,
      date?: string | null,
      totalOrder?: number | null,
      status?: OrderStatus | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    email: string,
    orders?:  {
      __typename: "ModelOrderConnection",
      items?:  Array< {
        __typename: "Order",
        id: string,
        userId: string,
        date?: string | null,
        totalOrder?: number | null,
        status?: OrderStatus | null,
        createdAt?: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    email: string,
    orders?:  {
      __typename: "ModelOrderConnection",
      items?:  Array< {
        __typename: "Order",
        id: string,
        userId: string,
        date?: string | null,
        totalOrder?: number | null,
        status?: OrderStatus | null,
        createdAt?: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    email: string,
    orders?:  {
      __typename: "ModelOrderConnection",
      items?:  Array< {
        __typename: "Order",
        id: string,
        userId: string,
        date?: string | null,
        totalOrder?: number | null,
        status?: OrderStatus | null,
        createdAt?: string | null,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateItemSubscription = {
  onCreateItem?:  {
    __typename: "Item",
    id: string,
    title: string,
    itemDescription?: string | null,
    type: string,
    photoPath?: string | null,
    price: number,
    orders?:  {
      __typename: "ModelOrderItemsConnection",
      items?:  Array< {
        __typename: "OrderItems",
        id: string,
        orderId: string,
        itemId: string,
        name: string,
        count: number,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    createdAt: string,
  } | null,
};

export type OnUpdateItemSubscription = {
  onUpdateItem?:  {
    __typename: "Item",
    id: string,
    title: string,
    itemDescription?: string | null,
    type: string,
    photoPath?: string | null,
    price: number,
    orders?:  {
      __typename: "ModelOrderItemsConnection",
      items?:  Array< {
        __typename: "OrderItems",
        id: string,
        orderId: string,
        itemId: string,
        name: string,
        count: number,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    createdAt: string,
  } | null,
};

export type OnDeleteItemSubscription = {
  onDeleteItem?:  {
    __typename: "Item",
    id: string,
    title: string,
    itemDescription?: string | null,
    type: string,
    photoPath?: string | null,
    price: number,
    orders?:  {
      __typename: "ModelOrderItemsConnection",
      items?:  Array< {
        __typename: "OrderItems",
        id: string,
        orderId: string,
        itemId: string,
        name: string,
        count: number,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    updatedAt: string,
    createdAt: string,
  } | null,
};

export type OnCreateOrderItemsSubscription = {
  onCreateOrderItems?:  {
    __typename: "OrderItems",
    id: string,
    orderId: string,
    itemId: string,
    name: string,
    count: number,
    total: number,
    order?:  {
      __typename: "Order",
      id: string,
      items?:  {
        __typename: "ModelOrderItemsConnection",
        nextToken?: string | null,
      } | null,
      userId: string,
      date?: string | null,
      totalOrder?: number | null,
      status?: OrderStatus | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    item?:  {
      __typename: "Item",
      id: string,
      title: string,
      itemDescription?: string | null,
      type: string,
      photoPath?: string | null,
      price: number,
      orders?:  {
        __typename: "ModelOrderItemsConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
      createdAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateOrderItemsSubscription = {
  onUpdateOrderItems?:  {
    __typename: "OrderItems",
    id: string,
    orderId: string,
    itemId: string,
    name: string,
    count: number,
    total: number,
    order?:  {
      __typename: "Order",
      id: string,
      items?:  {
        __typename: "ModelOrderItemsConnection",
        nextToken?: string | null,
      } | null,
      userId: string,
      date?: string | null,
      totalOrder?: number | null,
      status?: OrderStatus | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    item?:  {
      __typename: "Item",
      id: string,
      title: string,
      itemDescription?: string | null,
      type: string,
      photoPath?: string | null,
      price: number,
      orders?:  {
        __typename: "ModelOrderItemsConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
      createdAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteOrderItemsSubscription = {
  onDeleteOrderItems?:  {
    __typename: "OrderItems",
    id: string,
    orderId: string,
    itemId: string,
    name: string,
    count: number,
    total: number,
    order?:  {
      __typename: "Order",
      id: string,
      items?:  {
        __typename: "ModelOrderItemsConnection",
        nextToken?: string | null,
      } | null,
      userId: string,
      date?: string | null,
      totalOrder?: number | null,
      status?: OrderStatus | null,
      createdAt?: string | null,
      updatedAt: string,
    } | null,
    item?:  {
      __typename: "Item",
      id: string,
      title: string,
      itemDescription?: string | null,
      type: string,
      photoPath?: string | null,
      price: number,
      orders?:  {
        __typename: "ModelOrderItemsConnection",
        nextToken?: string | null,
      } | null,
      updatedAt: string,
      createdAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateOrderSubscription = {
  onCreateOrder?:  {
    __typename: "Order",
    id: string,
    items?:  {
      __typename: "ModelOrderItemsConnection",
      items?:  Array< {
        __typename: "OrderItems",
        id: string,
        orderId: string,
        itemId: string,
        name: string,
        count: number,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    userId: string,
    date?: string | null,
    totalOrder?: number | null,
    status?: OrderStatus | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateOrderSubscription = {
  onUpdateOrder?:  {
    __typename: "Order",
    id: string,
    items?:  {
      __typename: "ModelOrderItemsConnection",
      items?:  Array< {
        __typename: "OrderItems",
        id: string,
        orderId: string,
        itemId: string,
        name: string,
        count: number,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    userId: string,
    date?: string | null,
    totalOrder?: number | null,
    status?: OrderStatus | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteOrderSubscription = {
  onDeleteOrder?:  {
    __typename: "Order",
    id: string,
    items?:  {
      __typename: "ModelOrderItemsConnection",
      items?:  Array< {
        __typename: "OrderItems",
        id: string,
        orderId: string,
        itemId: string,
        name: string,
        count: number,
        total: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    userId: string,
    date?: string | null,
    totalOrder?: number | null,
    status?: OrderStatus | null,
    createdAt?: string | null,
    updatedAt: string,
  } | null,
};
