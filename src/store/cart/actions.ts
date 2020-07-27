import { CartActions, CartActionType, CartItem } from './actionsTypes';

export const addToCart = (payload: CartItem): CartActionType => {
  return {
    type: CartActions.AddToCart,
    payload,
  };
};

export const removeCartItem = (payload: CartItem): CartActionType => {
  return {
    type: CartActions.RemoveItem,
    payload,
  };
};

export const toggleCart = (payload: boolean): CartActionType => {
  return {
    type: CartActions.ToggleCart,
    payload,
  };
};

export const clearCart = (): CartActionType => {
  return {
    type: CartActions.ClearCart,
  };
};

export const Checkout = (payload: boolean): CartActionType => {
  return {
    type: CartActions.Checkout,
    payload,
  };
};
