import { IPokemon } from '../../entities/Pokemon';

export enum CartActions {
  AddToCart = 'ADD_TO_CART',
  RemoveItem = 'REMOVE_ITEM',
  ToggleCart = 'TOGGLE_CART',
  ClearCart = 'CLEAR_CART',
  Checkout = 'CHECKOUT',
}

export interface CartItem {
  id: string;
  product: IPokemon;
  quantity: number;
}

export interface RemoveItemAction {
  type: CartActions.RemoveItem;
  payload: CartItem;
}

export interface AddToCartAction {
  type: CartActions.AddToCart;
  payload: CartItem;
}

export interface ToggleCartAction {
  type: CartActions.ToggleCart;
  payload: boolean;
}

export interface ClearCartAction {
  type: CartActions.ClearCart;
}

export interface CheckoutAction {
  type: CartActions.Checkout;
  payload: boolean;
}

export type CartActionType =
  | AddToCartAction
  | RemoveItemAction
  | ToggleCartAction
  | ClearCartAction
  | CheckoutAction;
