export enum ActionType {
  "ADD_TO_BASKET",
  "SUBTRACT_FROM_BASKET",
  "REMOVE_FROM_BASKET",
  "TOGGLE_BASKET",
  "TOGGLE_ORDERS",
  "CLEAR_BASKET",
}

export type Action = {
  type: ActionType;
  payload: any;
};

export const toggleBasket = (open: boolean): Action => ({
  type: ActionType.TOGGLE_BASKET,
  payload: {
    open,
  },
});

export const addToBasket = (
  itemId: string,
  name: string,
  price: number,
  count = 1
): Action => ({
  type: ActionType.ADD_TO_BASKET,
  payload: {
    itemId,
    name,
    count,
    price,
  },
});

export const subtractFromBasket = (
  itemId: string,
  price: number,
  count = 1
): Action => ({
  type: ActionType.SUBTRACT_FROM_BASKET,
  payload: {
    itemId,
    count,
    price,
  },
});

export const removeFromBasket = (itemId: string, price: number): Action => ({
  type: ActionType.REMOVE_FROM_BASKET,
  payload: {
    itemId,
    price,
  },
});

export const clearBasket = (): Action => ({
  type: ActionType.CLEAR_BASKET,
  payload: {},
});

export const toggleOrders = (open: boolean): Action => ({
  type: ActionType.TOGGLE_ORDERS,
  payload: {
    open,
  },
});
