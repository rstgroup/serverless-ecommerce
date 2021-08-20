import { Action, ActionType } from "./actions";
import { Reducer } from "react";

export const reducer: Reducer<State, Action> = (
  state: State,
  action: Action
) => {
  switch (action.type) {
    case ActionType.TOGGLE_BASKET:
      return {
        ...state,
        basket: {
          ...state.basket,
          open: action.payload.open,
        },
      };
    case ActionType.TOGGLE_ORDERS:
      return {
        ...state,
        basket: {
          ...state.basket,
          open: action.payload.open || state.basket.open,
        },
        orders: {
          ...state.orders,
          open: action.payload.open,
        },
      };
    case ActionType.ADD_TO_BASKET:
      const itemId = action.payload.itemId;
      const basketItem = state.basket.items.find(
        (item) => item.itemId === itemId
      );
      const itemsAfterAdd = basketItem
        ? state.basket.items.map((item) => {
            if (item.itemId === itemId) {
              return {
                ...item,
                count: item.count + action.payload.count,
              };
            }
            return item;
          })
        : [
            ...state.basket.items,
            {
              itemId,
              name: action.payload.name,
              price: action.payload.price,
              count: 1,
            } as OrderItem,
          ];

      return {
        ...state,
        basket: {
          ...state.basket,
          open: true,
          items: itemsAfterAdd,
          total: itemsAfterAdd.reduce(
            (sum, item) => sum + item.price * item.count,
            0
          ),
        },
      };
    case ActionType.SUBTRACT_FROM_BASKET:
      const basketItemToSub = state.basket.items.find(
        (item) => item.itemId === action.payload.itemId
      );
      let newCountAfterSub;

      const itemsAfterSub = basketItemToSub
        ? state.basket.items.map((item) => {
            if (item.itemId === action.payload.itemId) {
              newCountAfterSub = Math.max(
                1,
                basketItemToSub.count - action.payload.count
              );
              return {
                ...item,
                count: newCountAfterSub,
              };
            }
            return item;
          })
        : state.basket.items;

      return {
        ...state,
        basket: {
          ...state.basket,
          items: itemsAfterSub,
          total: itemsAfterSub.reduce(
            (sum, item) => sum + item.price * item.count,
            0
          ),
        },
      };
    case ActionType.REMOVE_FROM_BASKET:
      const itemsAfterRem = [
        ...state.basket.items.filter(
          (item) => item.itemId !== action.payload.itemId
        ),
      ];
      return {
        ...state,
        basket: {
          ...state.basket,
          items: itemsAfterRem,
          total: itemsAfterRem.reduce(
            (sum, item) => sum + item.price * item.count,
            0
          ),
        },
      };
    case ActionType.CLEAR_BASKET:
      return {
        ...state,
        basket: {
          ...state.basket,
          items: [],
          total: 0,
        },
      };
  }

  return state;
};

type OrderItem = {
  itemId: string;
  name: string;
  count: number;
  price: number;
};

export type State = {
  basket: {
    open: boolean;
    items: OrderItem[];
    total: number;
  };
  orders: {
    open: boolean;
  };
};

export const defaultState: State = {
  basket: {
    open: false,
    items: [],
    total: 0,
  },
  orders: {
    open: false,
  },
};
