import { CartActions, CartActionType, CartItem } from './actionsTypes';

export interface CartState {
  items: CartItem[];
  total: number;
  isOpened: boolean;
  checkoutComplete: boolean;
}

const initialState = {
  items: [] as CartItem[],
  total: 0,
  isOpened: false,
  checkoutComplete: false,
};

const calculatePrice = (cartItem: CartItem): number => {
  if (cartItem.product.discountPrice !== 0) {
    return cartItem.product.discountPrice * cartItem.quantity;
  }

  return cartItem.product.price * cartItem.quantity;
};

export const cartReducer = (state = initialState, action: CartActionType): CartState => {
  switch (action.type) {
    case CartActions.AddToCart:
      return {
        ...state,
        items: [...state.items, action.payload],
        total: state.total + calculatePrice(action.payload),
      };
    case CartActions.ToggleCart:
      return { ...state, isOpened: action.payload };
    case CartActions.RemoveItem:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload.id),
        total: state.total - calculatePrice(action.payload),
      };
    case CartActions.ClearCart:
      return { ...state, items: [], total: 0 };
    case CartActions.Checkout:
      return { ...state, items: [], total: 0, checkoutComplete: action.payload };
    default:
      return state;
  }
};
